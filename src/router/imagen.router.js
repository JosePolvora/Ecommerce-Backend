const express = require("express");
const imagenController = require("../controllers/imagen.controller");
const router = express.Router();

// Rutas para gestionar imágenes
router.post("/imagenes", imagenController.createImagen);
router.get("/imagenes", imagenController.getImagenes);
router.get("/imagenes/:id", imagenController.getImagenById);
router.get("/imagenes/productos/:id", imagenController.getImagenByProduct);
router.put("/imagenes/:id", imagenController.updateImagen);
router.delete("/imagenes/:id", imagenController.deleteImagen);

module.exports = router;