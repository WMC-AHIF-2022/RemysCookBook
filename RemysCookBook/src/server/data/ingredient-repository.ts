import {Ingredient, Menu} from "./model";
import {DB} from "../database";

export async function getAllIngredients(): Promise<Ingredient[] | undefined>{
    const db = await DB.createDBConnection();
    const ingredients: Ingredient[] = await db.all<Ingredient[]>('SELECT * FROM INGREDIENTS');
    await db.close();

    return ingredients;
}

export async function getAllIngredientsByRecipeID(recipeID: number): Promise<Ingredient[] | undefined>{
    const db = await DB.createDBConnection();
    const stmt = await db.prepare('SELECT * FROM INGREDIENTS WHERE recipeID = ?1');
    await stmt.bind({1: recipeID});
    const ingredients: Ingredient[] | undefined = await stmt.all<Ingredient[]>();
    await stmt.finalize();
    await db.close();

    return ingredients;
}