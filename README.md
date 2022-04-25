# API-REST-Livros

API para cadastro e consulta de livros

#

### Necessário:

-   Node v16.13.0
-   Express v4.17.3
-   Mongoose v6.2.6
-   Dotenv v16.0.0

#

### devDependencies:

-   Nodemon v2.0.15

#

### Instalação

Clone o repositório e instale as dependencias.
Crie no root o arquivo ".env" para conexão com o BD seguindo o modelo disponivel em ".env.example".
Inicie o servidor digitando "npm run dev"

### Técnologias utilizadas:

<div>
    <img align="center" alt="Nodejs" height="30"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
    <img align="center" alt="Express" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/xpress-original-wordmark.svg">
    <img align="center" alt="MongoDB" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg">
    <img align="center" alt="Mongoose" height="30" src="https://www.pngfind.com/pngs/m/430-4309574_mongoose-js-logo-hd-png-download.png">
    <img align="center" alt="Nodemon" height="30" src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png">
     <img align="center" alt="Dotenv" height="30" src="https://api.nuget.org/v3-flatcontainer/dotenv.net/3.1.1/icon">

</div>

### Descrição do projeto:

<p>Projeto desenvolvido no curso API-Rest com Express e MongoDB da plataforma Alura.</p>
<p>Através da rota "/livros" com os metodos HTTP GET,POST,PUT e DELETE, é possível incluir um novo livro ou excluir. Possui também a rota "/autores" com os mesmos metodos e que é requerimento para conseguir cadastrar um novo livro.</p>

### Acesso ao projeto:

Deploy no heroku:
home:(https://apirest-bookstore.herokuapp.com/)
livros:(https://apirest-bookstore.herokuapp.com/livros)
autores:(https://apirest-bookstore.herokuapp.com/autores)
