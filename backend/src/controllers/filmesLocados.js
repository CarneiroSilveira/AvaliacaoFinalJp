
const FilmesLocadoService = require("../services/filmesLocados")

class FilmesLocadosController {
    async LocarFilme(req, res) {
        const idFilme = req.body
        const idCliente = req.session.id

        try {
            const filme = await FilmesLocadoService.createFilme(Number(idFilme), Number(idCliente))
            return res.status(201).send(filme)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao locar filme ${e.message}` });
        }
    }
    async DevolverFilme(req, res) {
        const { id, idFilme } = req.body
        const idCliente = req.session.id

        try {
            const filme = await FilmesLocadoService.createFilme(Number(id), Number(idFilme), Number(idCliente))
            return res.status(201).send(filme)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao locar filme ${e.message}` });
        }
    }
}
module.exports = new FilmesLocadosController();