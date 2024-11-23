const filme = require("../models/filmes");

require("dotenv").config()

class FilmeService {
    async createFilme(titulo, faixaEtaria, diretor) {
        if (!titulo || !faixaEtaria || !diretor) {
            throw new Error("Titulo, diretor e a faixa ereditaria são campos obrigatórios.");
        }
        if (!process.env.FAIXA_ERTARIA.includes(faixaEtaria)) {
            throw new Error("Você deve passar uma faixa etaria valida!");
        }

        const filmeValue = await filme.create({
            titulo,
            faixaEtaria,
            diretor
        })

        return filmeValue;
    }
    async update(id, titulo, faixaEtaria, diretor) {
        const oldFilme = await filme.findByPk(id);

        oldFilme.titulo = titulo || oldFilme.titulo;
        oldFilme.faixaEtaria = faixaEtaria || oldFilme.faixaEtaria;
        oldFilme.diretor = diretor || oldFilme.diretor;

        oldFilme.save();
    }
    async delete(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }
        const filmeValue = await this.findOne(id);
        filmeValue.destroy();

        return;
    }
    async findOne(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }

        const filmeValue = await cliente.findByPk(id);

        if (!filmeValue) {
            throw new Error("Cliente não encontrado.");
        }

        return filmeValue;
    }
    async findAll() {
        return filme.findAll();
    }
}

module.exports = new FilmeService();