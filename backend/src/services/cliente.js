const cliente = require("../models/clientes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config()

class ClienteService {
    async createCliente(email, senha, nome) {
        if (!nome || !senha || !email) {
            throw new Error("Email, senha e nome de usúario são obrigatórios.");
        }
        const cypherSenha = await bcrypt.hash(String(senha), SALT_VALUE);

        const clienteValue = await usuario.create({
            nome,
            email,
            senha: cypherSenha,
        });

        return { nome: clienteValue.nome, email: clienteValue.email };
    }

    async update(id, email, senha, nome) {
        const oldCustomer = await cliente.findByPk(id);
        if (email) {
            const sameEmail = await cliente.findOne({ where: { email } });
            if (sameEmail && sameEmail.id !== id) {
                throw new Error("Email já cadastrado.");
            }
        }

        oldCustomer.nome = nome || oldCustomer.nome;
        oldCustomer.email = email || oldCustomer.email;
        oldCustomer.senha = senha
            ? await bcrypt.hash(String(senha), SALT_VALUE)
            : oldCustomer.senha;
        oldCustomer.save();

        return oldCustomer;
    }

    async delete(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }
        const clienteValue = await this.findOne(id);
        clienteValue.destroy();

        return;
    }

    async findOne(id) {
        if (id === undefined) {
            throw new Error("Id é obrigatório.");
        }

        const clienteValue = await cliente.findByPk(id);

        if (!clienteValue) {
            throw new Error("Cliente não encontrado.");
        }

        return clienteValue;
    }

    async findAll() {
        return cliente.findAll();
    }

    async login(email, senha) {
        if (email === undefined || senha === undefined) {
            throw new Error("Email e senha são obrigatórios.");
        }

        const clienteValue = await cliente.findOne({ where: { email } });

        if (!clienteValue) {
            throw new Error("[1] Usuário e senha inválidos.");
        }

        const senhaValida = await bcrypt.compare(String(senha), clienteValue.senha);
        if (!senhaValida) {
            throw new Error("[2] Usuário e senha inválidos.");
        }

        return jwt.sign({ id: clienteValue.id }, process.env.JWT_PASS, { expiresIn: 60 * 60 });
    }
}

module.exports = new ClienteService();