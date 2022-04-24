//Todas as rotas seram concentradas nesse arquivo
import express from "express";
import routesBooks from "./booksRoutes.js";
import routesAuthor from "./authorsRoutes.js";

const routes = (app) => {
    //página inicial
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de node");
    });

    app.use(express.json(), routesBooks, routesAuthor);
};

export default routes;
