import mongoose from "mongoose"; //biblioteca mongoose é baseada em schemas

mongoose.connect(
    "mongodb+srv://bookstoreowner:Xf91PQnlizGVGaRG@alura-curso-nodeexpress.egdvt.mongodb.net/alura-node"
);

const db = mongoose.connection;

export default db;
