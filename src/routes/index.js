//Todas as rotas seram concentradas nesse arquivo

import express from "express";

import router from "./booksRoutes.js";

const routes = (app) => {
    //página inicial
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de node");
    });

    app.use(express.json(), router);
};

export default routes;
