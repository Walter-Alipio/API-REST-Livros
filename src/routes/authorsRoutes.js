import express from "express";
import authorsController from "../controllers/authorsController.js";

const routerAuthor = express.Router();
// ":" indica que id será enviado
routerAuthor
    .get("/autores", authorsController.listAuthors) //lista todos os autores
    .get("/autores/:id", authorsController.listAuthorById) //lista por id
    .post("/autores", authorsController.registerAAuthor) //incluir autor
    .put("/autores/:id", authorsController.updateAuthor) //atualizar autor
    .delete("/autores/:id", authorsController.deleteAuthor); //excluir autor

export default routerAuthor; //rotas para autor
