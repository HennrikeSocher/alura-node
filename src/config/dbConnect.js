import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<username>:<password>@node-express.veriahy.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

