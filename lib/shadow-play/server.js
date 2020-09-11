import express from "express";
import cors from "cors";
import { v4 as createUUID } from 'uuid';

export default function startServer(port, componentList) {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.post('/create/:name', (req, res) => {
        console.log('create: ' + req.params.name);
        res.json({ uuid: createUUID() });
    });
    app.listen(port, () => console.log('server start'));
}