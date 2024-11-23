const ClienteService = require("../services/cliente");

class ClienteController {
    async createCliente(req, res) {
        const { nome, email, senha } = req.body

        try {
            const cliente = await ClienteService.createCliente(nome, email, senha)
            return res.status(201).send(cliente)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar usuário ${e.message}` });
        }
    }
    async updateCliente(req, res) {
        const id = req.params.id || req.session.id
        const { nome, email, senha } = req.body

        try {
            const cliente = await ClienteService.update(Number(id), nome, email, senha)
            return res.status(200).send(cliente)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar usuário ${e.message}` })
        }
    }

    async deleteCliente(req, res) {
        const id = req.params.id || req.session.id

        try {
            await ClienteService.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar usuário ${e.message}` })
        }
    }

    async findClientes(req, res) {
        try {
            const clientes = await ClienteService.findAll()
            return res.status(200).send(clientes)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}` })
        }
    }

    async findContext(req, res) {
        try {
            const cliente = await ClienteService.findOne(Number(req?.session?.id) || 0)
            return res.status(200).send(cliente)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}` })
        }
    }



    async login(req, res) {
        const { email, senha } = req.body
        console.log(req.body)
        try {
            const token = await ClienteService.login(email, senha)

            res.status(200).send({ token })
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }
}

module.exports = new ClienteController();