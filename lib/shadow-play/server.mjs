import express from "express";

export default function startServer(port, componentList) {
    const app = express();
    app.listen(port, () => console.log('server start'));
}