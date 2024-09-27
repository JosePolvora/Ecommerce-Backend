const express = require("express");
const mensajeController = require("../controllers/mensaje.controller");
const router = express.Router();



router.get("/mensajes", mensajeController.getMensajes);
router.post("/mensajes", mensajeController.createMensaje);
router.get("/mensajes/:id", mensajeController.getMensajeById);
router.put("/mensajes/:id", mensajeController.updateMensaje);
router.delete("/mensajes/:id", mensajeController.deleteMensaje);



module.exports = router;