import express from "express";
import initApiRoutes from "./routes/api";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT

initApiRoutes(app);

app.listen(PORT, () => {
    console.log("Running: " + PORT);
})