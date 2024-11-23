const express = require("express");

const FilmeController = require("../controllers/filme");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/:id", authMiddleware(), FilmeController.findFilme);
router.get("/", authMiddleware(), FilmeController.findFilmes);

router.put("/:id", authMiddleware(), FilmeController.updateFilme);
router.delete("/:id", authMiddleware(), FilmeController.deleteFilme);

module.exports = router;