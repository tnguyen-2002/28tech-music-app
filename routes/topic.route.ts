import express from "express";
const router = express.Router();

import * as controller from "../controllers/topics.controller";

router.get("/", controller.index);

export const topicsRoute = router;