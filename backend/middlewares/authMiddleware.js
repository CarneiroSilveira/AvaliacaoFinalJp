const jwt = require("jsonwebtoken");
const cliente = require('../services/cliente')
require('dotenv').config()

function authMiddleware(roles = []) {
    return (req, res, next) => {
        const authorization = req.headers["authorization"];

        if (!authorization) {
            return res.status(400).json({ mensagem: "Auth Bearer não fornecido" });
        }

        const token = authorization.split(' ')[1]

        if (!token) {
            return res.status(400).json({ mensagem: "Token não fornecido" });
        }

        jwt.verify(token, process.env.JWT_PASS, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ mensagem: "Token inválido" });
            }

            const clienteLogged = await cliente.findcliente(decoded.id)

            if (!clienteLogged) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }
            if (roles.length && !roles.includes(clienteLogged.permissao)) {
                return res.status(403).json({ mensagem: "Sem permissão" });
            }

            req.session = decoded;

            next();
        });
    }
}

module.exports = authMiddleware;