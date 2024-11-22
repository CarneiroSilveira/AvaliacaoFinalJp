const express = require("express");
const database = require("./config/database");
require('dotenv').config();

const app = express();
app.use(express.json());

database.db
    .sync({ force: true }) // Quando iniciar a fase beta converta para false
    .then((_) => {
        app.listen(3000, (_) => {
            console.log("Server running on port 3000");
        });
    })
    .catch((e) => {
        console.error(`Erro ao inicializar o banco de dados ${e}`);
    });