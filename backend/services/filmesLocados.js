const filmeLocado = require("../models/filmesLocados");

require("dotenv").config()

class FilmeLocadoService {
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

module.exports = new FilmeLocadoService();