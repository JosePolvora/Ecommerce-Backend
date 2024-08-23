const express = require("express");
const domicilioController = require("../controllers/domicilio.controller");
const router = express.Router();



router.get("/domicilios", domicilioController.getDomicilios);
router.post("/domicilios", domicilioController.createDomicilio);
router.get("/domicilios/:id", domicilioController.getDomicilioById);
router.put("/domicilios/:id", domicilioController.updateDomicilio);
router.delete("/domicilios/:id", domicilioController.deleteDomicilio);



module.exports = router;