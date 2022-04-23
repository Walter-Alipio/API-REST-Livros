import express from "express";
import db from "./config/DbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro ao tentar conectar bd"));
db.once("open", () => {
    console.log("Conexão com o db feita com sucesso.");
});

const app = new express();
routes(app);
app.use(express.json()); //recurso que interpreta resposta como json

export default app; //exporta todo os metodos do app
