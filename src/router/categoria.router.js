const express = require("express");
const categoriaController = require("../controllers/categoria.controller");
const router = express.Router();



router.get("/categorias", categoriaController.getCategorias);
router.post("/categorias", categoriaController.createCategoria);
router.get("/categorias/:id", categoriaController.getCategoriaById);
router.put("/categorias/:id", categoriaController.updateCategoria);
router.delete("/categorias/:id", categoriaController.deleteCategoria);



module.exports = router;