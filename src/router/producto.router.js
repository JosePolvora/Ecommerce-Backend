const express = require("express");
const productoController = require("../controllers/producto.controller");
const router = express.Router();


router.get("/productos/todos", productoController.getProductos);
router.post("/productos", productoController.createProducto);
router.get("/productos/:id", productoController.getProductoById);
router.put("/productos/:id", productoController.updateProducto);
router.delete("/productos/:id", productoController.deleteProducto);

router.get("/productos/categoria/:id", productoController.getProductoByCategoria);

router.get("/productos", productoController.getListaProductos);


module.exports = router;

