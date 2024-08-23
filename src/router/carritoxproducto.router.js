const express = require("express");
const carritoxproductoController = require("../controllers/carritoxproducto.controller");
const router = express.Router();



router.get("/carritoxproductos", carritoxproductoController.getCarritoxproductos);
router.post("/carritoxproductos", carritoxproductoController.createCarritoxproducto);
router.get("/carritoxproductos/:id", carritoxproductoController.getCarritoxproductoById);
router.put("/carritoxproductos/:id", carritoxproductoController.updateCarritoxproducto);
router.delete("/carritoxproductos/:id", carritoxproductoController.deleteCarritoxproducto);



module.exports = router;