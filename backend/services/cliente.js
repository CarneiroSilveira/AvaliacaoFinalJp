const cliente = require("../models/clientes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config()

class clienteService {
    async createCliente() {

    }
    async update() {

    }
    async delete() {

    }
    async findOne() {

    }
    async findAll() {
        return cliente.findAll();
    }
}