const express = require("express");
const imagenController = require("../controllers/imagen.controller");
const router = express.Router();



router.get("/imagenes", imagenController.getImagenes);
router.post("/imagenes", imagenController.createImagen);
router.get("/imagenes/:id", imagenController.getImagenById);
router.put("/imagenes/:id", imagenController.updateImagen);
router.delete("/imagenes/:id", imagenController.deleteImagen);



module.exports = router;