const filme = require("../models/filmes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config()

class filmeService {
    async createFilme() {

    }
    async update() {

    }
    async delete() {

    }
    async findOne() {

    }
    async findAll() {
        return filme.findAll();
    }
}