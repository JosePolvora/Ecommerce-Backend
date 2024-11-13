const express = require("express");
const usuarioController = require("../controllers/usuario.controller");
const router = express.Router();



router.get("/usuarios", usuarioController.getUsuarios);
router.post("/usuarios", usuarioController.createUsuario);
router.get("/usuarios/:id", usuarioController.getUsuarioById);
router.put("/usuarios/:id", usuarioController.updateUsuario);
router.delete("/usuarios/:id", usuarioController.deleteUsuario);

router.post("/usuarios/login", usuarioController.loginUsuario);


module.exports = router;