import express from "express";
import initApiRoutes from "./routes/api";
import 'dotenv/config'
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT

initApiRoutes(app);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log("Running: " + PORT);
})