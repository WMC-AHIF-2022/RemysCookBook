import { Database as Driver } from "sqlite3";
import { open, Database } from "sqlite";

export const dbFileName: string = 'database.db';

export class DB {
    public static async createDBConnection(): Promise<Database> {
        const dbConnection = await open({
            filename: `./${dbFileName}`,
            driver: Driver
        });
        await DB.ensureTablesCreated(dbConnection);
        return dbConnection;
    }

    private static async ensureTablesCreated(connection: Database): Promise<void> {
        await connection.run(
            `create table if not exists recipes (
                recipeID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                recipeName TEXT NOT NULL,
                preparation TEXT NOT NULL,
                rating INTEGER,
                category TEXT NOT NULL
            ) strict`
        );
        await connection.run(
            `create table if not exists menu (
                recipeID INTEGER NOT NULL PRIMARY KEY,
                recipeName TEXT NOT NULL,
                requestedFrom TEXT NOT NULL,
                date TEXT NOT NULL,
                accepted TEXT NOT NULL
            ) strict`
        );
        await connection.run(
            `create table if not exists ingredients (
                ingredientID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                recipeID INTEGER NOT NULL,
                ingredientName TEXT NOT NULL,
                amount TEXT,
                unit TEXT
            ) strict`
        );
    }
}