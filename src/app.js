import express from "express";
import db from "./config/DbConnect.js";
import books from "./models/Book.js";

db.on("error", console.log.bind(console, "Erro ao tentar conectar bd"));
db.once("open", () => {
    console.log("Conexão com o db feita com sucesso.");
});

const app = new express();

//função de apoio procura no nosso array pela posição do id informado
const serachBook = (id) => {
    return books.findIndex((book) => book.id == id);
};

app.use(express.json()); //recurso que interpreta resposta como json

//página inicial
app.get("/", (req, res) => {
    res.status(200).send("Curso de node");
});

//página de livros
//Sempre identificamos documentos e coleções de documentos pelo seu nome no plural.
app.get("/livros", (req, res) => {
    books.find((err, books) => {
        res.status(200).json(books);
    });
});

//livro especifico
app.get("/livros/:id", (req, res) => {
    const index = serachBook(req.params.id);
    res.status(200).json(books[index]);
});

//inclui livro
app.post("/livros", (req, res) => {
    books.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

//altera o titulo
app.put("/livros/:id", (req, res) => {
    const index = serachBook(req.params.id);
    books[index].titulo = req.body.titulo;
    res.status(200).json(books);
});

//apaga um livro
app.delete("/livros/:id", (req, res) => {
    const { id } = req.params;
    const index = serachBook(id);
    books.splice(index, 1);
    res.status(200).send(`Livro ${id} removido com sucesso!`);
});

export default app; //exporta todo os metodos do app
