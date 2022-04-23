import mongoose from "mongoose"; //biblioteca mongoose é baseada em schemas
//qui é feita a conexão com o athlas db
mongoose.connect(
    "mongodb+srv://bookstoreowner:Xf91PQnlizGVGaRG@alura-curso-nodeexpress.egdvt.mongodb.net/alura-node"
);

const db = mongoose.connection;

export default db;
