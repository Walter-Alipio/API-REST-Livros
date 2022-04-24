//Este arquivo faz o controle das requisições que chegam
import authors from "../models/Author.js";

class authorsController {
    //listar todos os autores
    static listAuthors = (req, res) => {
        //Sempre identificamos documentos e coleções de documentos pelo seu nome no plural.
        authors.find((err, authors) => {
            res.status(200).json(authors);
        });
    };
    //listar autor por id
    static listAuthorById = (req, res) => {
        const id = req.params.id; //params pega o atributo na URI
        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Id do autor não localizado`,
                });
                return;
            }
            res.status(200).send(authors);
        });
    };
    //inclui autor
    static registerAAuthor = (req, res) => {
        const author = new authors(req.body); //pegando as informações do corpo da requisição para criar um novo autor no shema pre-definido.
        /*O if testa se houve algum erro ao salvar o registro*/
        author.save((err) => {
            if (err) {
                res.status(500).send({
                    //falha com o servidor retornando erro 500
                    message: `${err.message} - falha ao cadastrar livro.`,
                });
                return;
            }
            res.status(200).send(author.toJSON());
        });
    };
    //atualizar autor
    static updateAuthor = (req, res) => {
        const id = req.params.id;
        /*usamos params para pegar o que foi passado no cabeçalho da requisição, na URI*/
        authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            //no MongoDB usamos a palavra "set" para fazer uma atualização
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            res.status(200).send({ message: "Autor atualizado com sucesso." });
        });
    };
    //excluir autor
    static deleteAuthor = (req, res) => {
        const id = req.params.id;
        /*usamos params para pegar o que foi passado no cabeçalho da requisição, na URI*/
        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            res.status(200).send({ message: "Autor removido com sucesso." });
        });
    };
}

export default authorsController;
