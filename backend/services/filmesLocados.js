const filmeLocado = require("../models/filmesLocados");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config()

class clienteService {
    async createFilmeLocado() {

    }
    async update() {

    }
    async delete() {

    }
    async findOne() {

    }
    async findAll() {
        return filmeLocado.findAll();
    }
}