
const FilmesLocadoService = require("../services/filmesLocados")

class FilmesLocadosController {
    async LocarFilme(req, res) {
        const { idFilme, idCliente } = req.body

        try {
            const filme = await FilmesLocadoService.createFilme(idFilme, idCliente)
            return res.status(201).send(filme)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao locar filme ${e.message}` });
        }
    }
    async DevolverFilme(req, res) {
        const id = 

        try {
            const filme = await FilmesLocadoService.createFilme()
            return res.status(201).send(filme)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao locar filme ${e.message}` });
        }
    }
}
module.exports = new FilmesLocadosController();