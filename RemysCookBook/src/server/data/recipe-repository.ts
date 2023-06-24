import {Menu, Recipe} from "./model";
import {DB} from "../database";

export async function getAllRecipes(): Promise<Recipe[] | undefined> {
    const db = await DB.createDBConnection();
    const recipes: Recipe[] = await db.all<Recipe[]>('SELECT * FROM Recipes');
    await db.close();

    console.log(recipes);
    return recipes;
}