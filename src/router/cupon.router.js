const express = require("express");
const cuponController = require("../controllers/cupon.controller");
const router = express.Router();



router.get("/cupones", cuponController.getCupones);
router.post("/cupones", cuponController.createCupon);
router.get("/cupones/:id", cuponController.getCuponById);
router.put("/cupones/:id", cuponController.updateCupon);
router.delete("/cupones/:id", cuponController.deleteCupon);

router.post("/cupones/validar", cuponController.validarCupon);




module.exports = router;
