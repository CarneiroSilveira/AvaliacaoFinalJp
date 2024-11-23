const express = require("express");
const database = require("./config/database");
const ClienteController = require("./controllers/cliente");
const ClienteRouter = require("./routes/clientes");
const FilmeRouter = require("./routes/filmes");
require('dotenv').config();

const app = express();
app.use(express.json());

app.post("/api/v1/login", ClienteController.login);
app.post("/api/v1/cadastro", ClienteController.createCliente);

app.use("/api/v1/cliente", ClienteRouter);
app.use("/api/v1/filme", FilmeRouter);

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