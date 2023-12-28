import express from "express";
import cors from "cors";
import conn from "./db/conn.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa API!' });
});

import routes from './routes/router.js';
app.use('/',routes);

app.listen(3000, () => {
    console.log('SERVIDOR ONLINE!');
});

await conn()