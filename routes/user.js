import express from "express";
import userController from '../controllers/userController.js'

const router = express.Router();
router
    .route("/user/:id")
    .get((req, res) => userController
        .get(req, res));

export default router