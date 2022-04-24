import "dotenv/config";
import app from "./src/app.js";

const port = process.env.port || process.env.PORT; //ou porta do ambiente de produção ou porta local

//executando o servidor
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
