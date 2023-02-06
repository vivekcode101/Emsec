import express from "express";
const router =  express.Router();

import UserController from "../Controller/UserController.js"
 router.post("/createuser",UserController)

export default router;