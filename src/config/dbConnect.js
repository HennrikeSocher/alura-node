import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ikitocontato:ikito123@node-express.veriahy.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

