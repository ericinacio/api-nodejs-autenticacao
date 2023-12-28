import express from "express";
import loginController from "../controllers/loginController.js";

const router = express.Router();
router
    .route("/auth/register")
    .post((req, res) => loginController
        .register(req, res));
router
    .route("/auth/login")
    .post((req, res) => loginController
        .login(req, res));

export default router