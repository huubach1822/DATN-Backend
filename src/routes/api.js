import express from "express";

const router = express.Router();

const initApiRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello world");
    })

    return app.use("/", router);
}

export default initApiRoutes;