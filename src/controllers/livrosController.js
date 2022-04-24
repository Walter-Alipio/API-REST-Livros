//Este arquivo faz o controle das requisições que chegam
import books from "../models/Book.js";

class BooksController {
    //listar todos os livros
    static listBooks = (req, res) => {
        //Sempre identificamos documentos e coleções de documentos pelo seu nome no plural.
        books
            .find()
            .populate("author") //populate faz a associação de um campo especifico "author"
            .exec((err, books) => {
                res.status(200).json(books);
            });
    };
    //listar livro por id
    static listBookById = (req, res) => {
        const id = req.params.id; //params pega o atributo na URI
        books
            .findById(id)
            .populate("author", "name")
            .exec((err, books) => {
                //tratamento de erro
                if (err) {
                    res.status(400).send({
                        message: `${err.message} - Id do livro não localizado`,
                    });
                    return;
                }
                res.status(200).send(books);
            });
    };
    //inclui livro
    static registerABook = (req, res) => {
        const book = new books(req.body); //pegando as informações do corpo da requisição para criar um novo livro no shema pre-definido.
        /*O if testa se houve algum erro ao salvar o registro*/
        book.save((err) => {
            if (err) {
                res.status(500).send({
                    //falha com o servidor retornando erro 500
                    message: `${err.message} - falha ao cadastrar livro.`,
                });
                return;
            }
            res.status(200).send(book.toJSON());
        });
    };
    //atualizar livro
    static updateBook = (req, res) => {
        const id = req.params.id;
        /*usamos params para pegar o que foi passado no cabeçalho da requisição, na URI*/
        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            //no MongoDB usamos a palavra "set" para fazer uma atualização
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            res.status(200).send({ message: "Livro atualizado com sucesso." });
        });
    };
    //excluir livro
    static deleteBook = (req, res) => {
        const id = req.params.id;
        /*usamos params para pegar o que foi passado no cabeçalho da requisição, na URI*/
        books.findByIdAndDelete(id, (err) => {
            //tratamento de erro
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            res.status(200).send({ message: "Livro removido com sucesso." });
        });
    };
    //listar por editora
    static listBookByPublisher = (req, res) => {
        const publisher = req.query.publisher;
        books.find({ publisher: publisher }, {}, (err, books) => {
            //tratamento de erro
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            res.status(200).send(books);
        });
    };
}

export default BooksController;
