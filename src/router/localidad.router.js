const express = require("express");
const localidadController = require("../controllers/localidad.controller");
const router = express.Router();



router.get("/localidades", localidadController.getLocalidades);
router.post("/localidades", localidadController.createLocalidad);
router.get("/localidades/:id", localidadController.getLocalidadById);
router.put("/localidades/:id", localidadController.updateLocalidad);
router.delete("/localidades/:id", localidadController.deleteLocalidad);



module.exports = router;