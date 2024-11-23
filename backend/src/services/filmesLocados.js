const FilmeLocado = require("../models/filmesLocados");

require("dotenv").config()

class FilmeLocadoService {
    async LocarFilme(idFilme, idCliente) {
        if (!idCliente || !idFilme) {
            throw new Error("idCliente e idFilme são campos obrigatórios.");
        }

        dataLocacao = new Date();

        const FilmeLocadoValue = await FilmeLocado.create({
            idFilme,
            idCliente,
            dataLocacao,
        })

        return FilmeLocadoValue;
    }
    async DevolverFilme(id, idFilme, idCliente) {
        const oldFilmeLocado = await FilmeLocado.findByPk(id);
        if (oldFilmeLocado.idFilme !== idFilme) {
            throw new Error("O filme procurado não existe")
        }
        if (oldFilmeLocado.idCliente !== idCliente) {
            throw new Error("Você só pode devolver filmes que foram locados na sua propria conta ")
        }
        if (oldFilmeLocado.dataLocacao !== null) {
            console.log(typeof (oldFilmeLocado.dataLocacao))
            throw new Error("Só da pra devolver um filme por vez");
        }
        oldFilmeLocado.dataDevolucao = new Date();
        oldFilmeLocado.save();

        return oldFilmeLocado;
    }
}

module.exports = new FilmeLocadoService();