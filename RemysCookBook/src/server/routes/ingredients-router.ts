import express from "express";
import {Ingredient, Menu} from "../data/model";
import {getAllMenus, getMenuByUserAndRecipeId} from "../data/menu-repository";
import {StatusCodes} from "http-status-codes";
import {getAllIngredients, getAllIngredientsByRecipeID} from "../data/ingredient-repository";

export const ingredientsRouter = express.Router();

ingredientsRouter.get("/", async (request, response) => {
    const ingredients: Ingredient[] | undefined = await getAllIngredients();

    if (typeof ingredients === "undefined"){
        response.status(StatusCodes.BAD_REQUEST).send("ingredients are undefined");
    } else {
        response.status(StatusCodes.OK).json(ingredients);
    }
})


ingredientsRouter.get("/:recipeID", async (request, response) => {
    const recipeId = Number(request.params.recipeID);

    if (typeof recipeId !== "number" || isNaN(recipeId)){
        response.status(StatusCodes.BAD_REQUEST).send("invalid parameter");
    }

    const ingredients: Ingredient[] | undefined = await getAllIngredientsByRecipeID(recipeId);

    if (typeof ingredients === "undefined"){
        response.status(StatusCodes.NOT_FOUND);
    } else {
        response.status(StatusCodes.OK).json(ingredients);
    }
})

