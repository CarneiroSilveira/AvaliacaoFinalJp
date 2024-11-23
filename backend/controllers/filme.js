const FilmeService = require("../services/filme")

class FilmeController {
    async createFilme(req, res) {
        const { titulo, faixaEtaria, diretor } = req.body

        try {
            const filme = await FilmeService.createFilme(titulo, faixaEtaria, diretor)
            return res.status(201).send(filme)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar filme ${e.message}` });
        }
    }
    async updateFilme(req, res) {
        const id = req.params.id || req.session.id
        const { titulo, faixaEtaria, diretor } = req.body

        try {
            const filme = await FilmeService.update(Number(id), titulo, faixaEtaria, diretor)
            return res.status(200).send(filme)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar filme ${e.message}` })
        }
    }

    async deleteFilme(req, res) {
        const id = req.params.id || req.session.id

        try {
            await FilmeService.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar filme ${e.message}` })
        }
    }

    async findFilmes(req, res) {
        try {
            const filmes = await FilmeService.findAll()
            return res.status(200).send(filmes)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar filme ${e.message}` })
        }
    }

    async findFilme(req, res) {
        const { id } = req.params.id

        try {
            const filme = await FilmeService.findOne(id)
            return res.status(200).send(filme)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar filme ${e.message}` })
        }
    }
}
module.exports = new FilmeController();