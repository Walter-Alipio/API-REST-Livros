import app from "./src/app.js";

const port = process.env.port || 3000; //ou porta do ambiente de produção ou 3000

//executando o servidor
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
