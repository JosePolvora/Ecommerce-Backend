const express = require("express");
const carritoController = require("../controllers/carrito.controller");
const router = express.Router();



router.get("/carritos", carritoController.getCarritos);
router.post("/carritos", carritoController.createCarrito);
router.get("/carritos/:id", carritoController.getCarritoById);
router.put("/carritos/:id", carritoController.updateCarrito);
router.delete("/carritos/:id", carritoController.deleteCarrito);



module.exports = router;