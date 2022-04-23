import express from "express";
import BooksController from "../controllers/livrosController.js";

const router = express.Router();
// ":" indica que id será enviado
router
    .get("/livros", BooksController.listBooks) //lista todos os livros
    .get("/livros/:id", BooksController.listBookById) //lista por id
    .post("/livros", BooksController.registerABook) //incluir livro
    .put("/livros/:id", BooksController.updateBook) //atualizar livro
    .delete("/livros/:id", BooksController.deleteBook); //excluir livro

export default router;
