import cors from "cors";
import express from "express";
import { join } from "path";

const app = express();

const path: string = join(__dirname, "../client/");
const options = { extensions: ["html", "js", "ts", "js.map"] };

app.use(express.json())
app.use(express.static(path, options));
//TODO app.use(routes)

const port: number = 3005;
app.listen(port,  () => {
    console.log(`Server listening on port ${port}`)
});
