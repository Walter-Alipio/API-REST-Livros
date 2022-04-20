import express from "express";

const app = new express();

const books = [
    {
        id: 1,
        titulo: "O senhor dos anéis",
    },
    {
        id: 2,
        titulo: "O Hobbit",
    },
];

app.get("/", (req, res) => {
    res.status(200).send("Curso de node");
});

app.get("/livros", (req, res) => {
    res.status(200).json(books);
});

export default app; //exporta todo os metodos do app
