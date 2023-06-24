import {DB} from "../database";
import {Menu} from "./model";
import {userInfo} from "os";
import {StatusCodes} from "http-status-codes";

export async function getAllMenus(): Promise<Menu[] | undefined> {
    const db = await DB.createDBConnection();
    const menus: Menu[] = await db.all<Menu[]>('SELECT * FROM MENU');
    await db.close();

    return menus;
}

export async function setMenuAccepted(recipeId: number, username: string){
    const menu: Menu | undefined = await getMenuByUserAndRecipeId(username, recipeId);

    if (typeof menu !== "undefined"){
        const accepted: string = "true";

        const db = await DB.createDBConnection();
        const stmt = await db.prepare(`UPDATE Menu SET accepted = ?1 WHERE recipeID = ?2 AND requestedFrom = ?3`);
        await stmt.bind({1: String(accepted), 2: menu.recipeId, 3: menu.requestedFrom});
        await stmt.run();
        await stmt.finalize();
        await db.close();

        console.log("successfully updated menu");
    }
}

export async function getMenuByUserAndRecipeId(username: string, recipeId: number): Promise<Menu | undefined> {
    const db = await DB.createDBConnection();
    const stmt = await db.prepare('SELECT * FROM MENU WHERE requestedFrom = ? AND recipeID = ?');
    await stmt.bind({1: username, 2: recipeId});
    const menu: Menu | undefined = await stmt.get<Menu>();
    await stmt.finalize();
    await db.close();

    return menu;
}

export async function createNewMenu(recipeID: number, recipeName: string, requestedFrom: string, date: string, accepted: string): Promise<number | undefined>{
    const db = await DB.createDBConnection();
    const stmt = await db.prepare('INSERT INTO MENU (recipeID, recipeName, requestedFrom, date, accepted) values (?1, ?2, ?3, ?4, ?5)');
    await stmt.bind({1: recipeID, 2: recipeName, 3: requestedFrom, 4: date, 5: accepted});

    try {
        const operationResult = await stmt.run();
        await stmt.finalize();
        await db.close();

        console.log("inserted successfully");

        return operationResult.changes;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteAllMenus(){
    const db = await DB.createDBConnection();
    await db.run('DELETE from Menu');
    await db.close();
}

export async function deleteMenu(recipeID: number, requestedFrom: string): Promise<number | undefined> {
    const db = await DB.createDBConnection();
    const stmt = await db.prepare(`DELETE FROM Menu WHERE recipeID = ?1 AND requestedFrom = ?2`);
    await stmt.bind({1: recipeID, 2: requestedFrom});
    const operationResult = await stmt.run();
    await stmt.finalize();
    await db.close();

    return operationResult.changes;
}