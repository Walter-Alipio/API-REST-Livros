import express from "express";
import BooksController from "../controllers/livrosController.js";

const routesBooks = express.Router();
// ":" indica que id será enviado
routesBooks
    .get("/livros", BooksController.listBooks) //lista todos os livros
    .get("/livros/busca", BooksController.listBookByPublisher) //buca por editoras
    .get("/livros/:id", BooksController.listBookById) //lista por id
    .post("/livros", BooksController.registerABook) //incluir livro
    .put("/livros/:id", BooksController.updateBook) //atualizar livro
    .delete("/livros/:id", BooksController.deleteBook); //excluir livro

export default routesBooks; //exportando as rodas de livros
