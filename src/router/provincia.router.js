const express = require("express");
const provinciaController = require("../controllers/provincia.controller");
const router = express.Router();



router.get("/provincias", provinciaController.getProvincias);
router.post("/provincias", provinciaController.createProvincia);
router.get("/provincias/:id", provinciaController.getProvinciaById);
router.put("/provincias/:id", provinciaController.updateProvincia);
router.delete("/provincias/:id", provinciaController.deleteProvincia);



module.exports = router;