import express from "express";
import {StatusCodes} from "http-status-codes";
import {Recipe} from "../data/model";
import {getAllRecipes} from "../data/recipe-repository";

export const recipesRouter = express.Router();

recipesRouter.get("/", async (request, response) => {
    const recipes: Recipe[] | undefined = await getAllRecipes();

    if (typeof recipes === "undefined"){
        response.status(StatusCodes.BAD_REQUEST).send("recipes are undefined");
    } else {
        response.status(StatusCodes.OK).json(recipes);
    }
});