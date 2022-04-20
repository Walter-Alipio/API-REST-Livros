const http = require("http"); // forma antiga de lhe dar com modulos, nativa do Node
//http é uma biblioteca interna do Node
const port = 3000;

const routes = {
    "/": "Curso de Node",
    "/livros": "Entrei na página de livros",
    "/autores": "Listagem de autores",
    "/editora": "Página editora",
    "/sobre": "Informações sobre o projeto",
};

//usamos o metodo .createServer da biblioteca para subir nosso servidor local
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" }); //resposta da requisição
    res.end(routes[req.url]);
});
//executando o servidor
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
