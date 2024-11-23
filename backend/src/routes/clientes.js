const express = require("express");

const ClienteController = require("../controllers/cliente");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/perfil", authMiddleware(), ClienteController.findContext);
router.get("/", authMiddleware(), ClienteController.findClientes);

router.put("/:id", authMiddleware(), ClienteController.updateCliente);
router.delete("/:id", authMiddleware(), ClienteController.deleteCliente);

module.exports = router;