//Todas as rotas seram concentradas nesse arquivo

import express from "express";
import routerBooks from "./booksRoutes.js";
import routerAuthor from "./authorsRoutes.js";

const routes = (app) => {
    //página inicial
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de node");
    });

    app.use(express.json(), routerBooks, routerAuthor);
};

export default routes;
