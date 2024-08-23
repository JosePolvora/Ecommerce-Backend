const express = require("express");
const clienteController = require("../controllers/cliente.controller");
const router = express.Router();



router.get("/clientes", clienteController.getClientes);
router.post("/clientes", clienteController.createCliente);
router.get("/clientes/:id", clienteController.getClienteById);
router.put("/clientes/:id", clienteController.updateCliente);
router.delete("/clientes/:id", clienteController.deleteCliente);



module.exports = router;