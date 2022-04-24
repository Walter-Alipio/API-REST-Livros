import mongoose from "mongoose"; //biblioteca mongoose é baseada em schemas
//qui é feita a conexão com o athlas db

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
//o endereço foi escondido usando variaveis globais
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}`);

const db = mongoose.connection;

export default db;
