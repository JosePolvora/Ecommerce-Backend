const express = require("express");
const ventaController = require("../controllers/venta.controller");
const router = express.Router();



router.get("/ventas", ventaController.getVentas);
router.post("/ventas", ventaController.createVenta);
router.get("/ventas/:id", ventaController.getVentaById);
router.put("/ventas/:id", ventaController.updateVenta);
router.delete("/ventas/:id", ventaController.deleteVenta);



module.exports = router;