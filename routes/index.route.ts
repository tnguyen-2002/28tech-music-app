import { Express } from "express";
import { topicsRoute } from "./topic.route";

export const routesClient = (app: Express) => {
    app.use("/topics", topicsRoute);
}
