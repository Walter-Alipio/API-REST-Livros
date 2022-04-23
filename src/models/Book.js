import mongoose from "mongoose";

//esquema de documentos da coleção
const bookSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    numberOfPages: { type: Number },
});

const books = mongoose.model("livros", bookSchema); //nome da coleção, esquema criado para ela

export default books;
