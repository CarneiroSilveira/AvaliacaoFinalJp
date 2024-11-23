const express = require("express");

const FilmeController = require("../controllers/filme");
const authMiddleware = require("../middlewares/authMiddleware");
const FilmeLocadoController = require("../controllers/filmesLocados");
const router = express.Router();

router.get("/:id", authMiddleware(), FilmeController.findFilme);
router.get("/", authMiddleware(), FilmeController.findFilmes);

router.put("/:id", authMiddleware(), FilmeController.updateFilme);
router.delete("/:id", authMiddleware(), FilmeController.deleteFilme);
router.post("/Criar", authMiddleware(), FilmeController.createFilme);
router.put("/Devolver", authMiddleware(), FilmeLocadoController.DevolverFilme);
router.post("/Locar", authMiddleware(), FilmeLocadoController.LocarFilme)

module.exports = router;