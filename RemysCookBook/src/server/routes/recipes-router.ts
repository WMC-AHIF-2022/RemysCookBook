import express from "express";
import {StatusCodes} from "http-status-codes";
import {Recipe} from "../data/model";
import {getAllRecipes, getRecipeByRecipeId, getRecipesByCategory} from "../data/recipe-repository";

export const recipesRouter = express.Router();

recipesRouter.get("/", async (request, response) => {
    const recipes: Recipe[] | undefined = await getAllRecipes();

    if (typeof recipes === "undefined"){
        response.status(StatusCodes.BAD_REQUEST).send("recipes are undefined");
    } else {
        response.status(StatusCodes.OK).json(recipes);
    }
});


recipesRouter.get("/:recipeID", async (request, response) => {
    const recipeId = Number(request.params.recipeID);

    if (typeof recipeId !== "number" || isNaN(recipeId)){
        response.status(StatusCodes.BAD_REQUEST).send("Invalid parameter");
    }

    const recipe: Recipe | undefined = await getRecipeByRecipeId(recipeId);

    if (typeof recipe === "undefined"){
        response.status(StatusCodes.NOT_FOUND);
    } else {
        response.status(StatusCodes.OK).json(recipe);
    }
});


recipesRouter.get("/category/:category", async (request, response) => {
    const category = request.params.category;

    if (typeof category !== "string" || category.length === 0){
        response.status(StatusCodes.BAD_REQUEST).send("Invalid parameter");
    }

    const recipes: Recipe[] | undefined = await getRecipesByCategory(category);

    if (typeof recipes === "undefined"){
        response.status(StatusCodes.NOT_FOUND);
    } else {
        response.status(StatusCodes.OK).json(recipes);
    }
});