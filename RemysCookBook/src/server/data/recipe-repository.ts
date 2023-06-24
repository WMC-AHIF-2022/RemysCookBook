import {Menu, Recipe} from "./model";
import {DB} from "../database";

export async function getAllRecipes(): Promise<Recipe[] | undefined> {
    const db = await DB.createDBConnection();
    const recipes: Recipe[] = await db.all<Recipe[]>('SELECT * FROM Recipes');
    await db.close();

    return recipes;
}

export async function getRecipeByRecipeId(recipeId: number): Promise<Recipe | undefined>{
    const db = await DB.createDBConnection();
    const stmt = await db.prepare('SELECT * FROM RECIPES WHERE recipeID = ?1');
    await stmt.bind({1: recipeId});
    const recipe: Recipe | undefined = await stmt.get<Recipe>();
    await stmt.finalize();
    await db.close();

    return recipe;
}

export async function getRecipesByCategory(category: string): Promise<Recipe[] | undefined> {
    const db = await DB.createDBConnection();
    const stmt = await db.prepare('SELECT * FROM RECIPES WHERE category = ?1');
    await stmt.bind({1: category});
    const recipes: Recipe[] = await stmt.all<Recipe[]>();
    await stmt.finalize();
    await db.close();

    console.log(recipes);
    return recipes;
}