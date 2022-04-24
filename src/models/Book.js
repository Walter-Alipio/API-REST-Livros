import mongoose from "mongoose";

//esquema de documentos da coleção
const bookSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required: true,
    },
    publisher: { type: String, required: true },
    numberOfPages: { type: Number },
});
/*o autor utilizara o id de outro schema,
 o ref deve indicar a entidade(nesse caso, autores que foi definido em ("autores", authorSchema), que equivale as tabelas do sql)*/
const books = mongoose.model("livros", bookSchema); //nome da coleção, esquema criado para ela

export default books;
