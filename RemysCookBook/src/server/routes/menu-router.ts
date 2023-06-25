import express, {response} from "express";
import {
    createNewMenu,
    deleteAllMenus, deleteMenu,
    getAllMenus,
    getMenuByUserAndRecipeId,
    setMenuAccepted
} from "../data/menu-repository";
import {StatusCodes} from "http-status-codes";
import {Menu} from "../data/model";
import {recipesRouter} from "./recipes-router";

export const menusRouter = express.Router();

menusRouter.get("/", async (request, response) => {
    const menus: Menu[] | undefined = await getAllMenus();

    if (typeof menus === "undefined"){
        response.status(StatusCodes.BAD_REQUEST).send("menus are undefined");
    } else {
        console.log(menus[0].recipeID);
        response.status(StatusCodes.OK).json(menus);
    }
});

menusRouter.get("/:username", async (request, response) => {
    const username = request.params.username;
    const recipeId = request.body.recipeId;

    if (typeof username !== "string" || username.length === 0 || typeof recipeId !== "number" || isNaN(recipeId)){
        response.status(StatusCodes.BAD_REQUEST).send("invalid parameters");
    }

    const menu: Menu | undefined = await getMenuByUserAndRecipeId(username, recipeId);

    if (typeof menu === "undefined"){
        response.status(StatusCodes.NOT_FOUND);
    } else {
        response.status(StatusCodes.OK).json(menu);
    }
});

menusRouter.post("/", async (request, response) => {
    const recipeID = request.body.recipeID;
    const recipeName = request.body.recipeName;
    const requestedFrom = request.body.requestedFrom;
    const date = request.body.date; //ISOString

    if (typeof recipeID !== "number" || isNaN(recipeID)
    || typeof recipeName !== "string" || recipeName.length === 0
    || typeof requestedFrom !== "string" || requestedFrom.length === 0
    || date.length === 0){
        response.status(StatusCodes.BAD_REQUEST).send("Invalid parameters.");
    }

    const accepted: string = "false";

    const operationResult = await createNewMenu(recipeID, recipeName, requestedFrom, date, accepted);

    if (typeof operationResult === "undefined" || operationResult !== 1){
        response.status(StatusCodes.BAD_REQUEST).send("OperationResult is undefined => menu already exists");
    } else {
        response.status(StatusCodes.OK).json({});
    }
})

menusRouter.patch("/:recipeId", async (request, response) => {
    const requestedFrom = request.body.requestedFrom;
    const recipeId = Number(request.params.recipeId);

    if (typeof requestedFrom !== "string" || requestedFrom.length === 0 || typeof recipeId !== "number" || isNaN(recipeId)){
        response.status(StatusCodes.BAD_REQUEST).send("Invalid parameters");
    }

    try{
        await setMenuAccepted(recipeId, requestedFrom);
        const updatedMenu = await getMenuByUserAndRecipeId(requestedFrom, recipeId);

        response.status(StatusCodes.OK).json(updatedMenu);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.BAD_REQUEST).send("db error occurred");
    }
});

menusRouter.delete("/", async (request, response) => {
    await deleteAllMenus();
    response.sendStatus(StatusCodes.NO_CONTENT);
});


menusRouter.delete("/:recipeID", async (request, response) => {
    const requestedFrom = request.body.requestedFrom;
    const recipeID = Number(request.params.recipeID);

    if (typeof requestedFrom !== "string" || requestedFrom.length === 0 || typeof recipeID !== "number" || isNaN(recipeID)){
        response.status(StatusCodes.BAD_REQUEST).send("Invalid parameters");
    }

    const operationResult = await deleteMenu(recipeID, requestedFrom);

    if (typeof operationResult === "undefined"){
        response.status(StatusCodes.BAD_REQUEST).send("OperationResult is undefined");
    } else {
        if (operationResult !== 1){
            response.status(StatusCodes.BAD_REQUEST).send('Menu wasnt deleted');
        } else {
            response.status(StatusCodes.OK).json({});
        }
    }
});

