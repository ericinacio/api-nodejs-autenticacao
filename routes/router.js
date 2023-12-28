import express from "express";
const router = express.Router();
import jwt from 'jsonwebtoken';

import { config } from 'dotenv'
config();
const { SECRET } = process.env;

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
        return res.status(401).json({ msg: "Acesso negado!" })
    }
    try {
        jwt.verify(token,SECRET)
    } catch (error) {
        res.status(400).json({ msg: "Token inválido!" })
    }
    next()
}

import authRouter from "./auth.js";
router.use("/", authRouter)

import userRouter from "./user.js";
router.use('/', checkToken, userRouter);

export default router