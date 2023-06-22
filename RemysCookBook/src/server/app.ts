import cors from "cors";
import express from "express";
import { join } from "path";
import {DB} from "./database";
import {menuesRouter} from "./routes/menu-router";
import {recipesRouter} from "./routes/recipes-router";
import {ingredientsRouter} from "./routes/ingredients-router";

const app = express();

const path: string = join(__dirname, "../client/");
const options = { extensions: ["html", "js", "ts", "js.map"] };

app.use(express.json())
app.use(express.static(path, options));
app.use(cors());
//TODO app.use(routes)
app.use("/api/menues", menuesRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/ingredients", ingredientsRouter);

const port: number = 3005;
app.listen(port,  async () => {
    const db = await DB.createDBConnection();
    // create a current challenge if not exists
    await db.close();
    console.log(`Server listening on port ${port}`)
});
