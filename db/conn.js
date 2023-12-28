import mongoose from "mongoose";

import { config } from 'dotenv';
config();
const { DB_CONFIG } = process.env;

export default async () => {
    try {
        mongoose.connect(`${DB_CONFIG}/api-node-jwt`);
        console.log("CONECTADO AO BANCO DE DADOS COM SUCESSO!");
    } catch (error) {
        console.error(`NÃO POSSÍVEL SE CONECTAR AO BANCO DE DADOS:${error}`);
    };
};