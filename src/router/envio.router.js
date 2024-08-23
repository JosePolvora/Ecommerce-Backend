const express = require("express");
const envioController = require("../controllers/envio.controller");
const router = express.Router();



router.get("/envios", envioController.getEnvios);
router.post("/envios", envioController.createEnvio);
router.get("/envios/:id", envioController.getEnvioById);
router.put("/envios/:id", envioController.updateEnvio);
router.delete("/envios/:id", envioController.deleteEnvio);



module.exports = router;