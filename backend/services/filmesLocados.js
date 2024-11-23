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
    async DevolverFilme(id) {
        const oldFilmeLocado = await FilmeLocado.findByPk(id);
        if (oldFilmeLocado.dataLocacao == !undefined) {
            throw new Error("Só da pra devolver um filme por vez");
        }
        oldFilmeLocado.dataDevolucao = new Date();
        oldFilmeLocado.save();

        return oldFilmeLocado;
    }
}

module.exports = new FilmeLocadoService();