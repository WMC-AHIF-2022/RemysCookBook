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
        //TODO tabelle erstellen
    }
}