const express = require("express");
const comentarioController = require("../controllers/comentario.controller");
const router = express.Router();



router.get("/comentarios", comentarioController.getComentarios);
router.post("/comentarios", comentarioController.createComentario);
router.get("/comentarios/:id", comentarioController.getComentarioById);
//router.put("/comentarios/:id", comentarioController.updateComentario);
router.delete("/comentarios/:id", comentarioController.deleteComentario);



module.exports = router;