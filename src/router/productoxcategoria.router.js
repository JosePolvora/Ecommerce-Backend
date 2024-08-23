const express = require("express");
const productoxcategoriaController = require("../controllers/productoxcategoria.controller");
const router = express.Router();



router.get("/productoxcategorias", productoxcategoriaController.getProductoxcategorias);
router.post("/productoxcategorias", productoxcategoriaController.createProductoxcategoria);
router.get("/productoxcategorias/:id", productoxcategoriaController.getProductoxcategoriaById);
router.put("/productoxcategorias/:id", productoxcategoriaController.updateProductoxcategoria);
router.delete("/productoxcategorias/:id", productoxcategoriaController.deleteProductoxcategoria);



module.exports = router;