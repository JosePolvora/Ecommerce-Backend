const express = require("express");
const router = express.Router();

// Todas las RUTAS

const carritoRouter = require("./carrito.router");
router.use("/", carritoRouter);

const carritoxproductoRouter = require("./carritoxproducto.router");
router.use("/", carritoxproductoRouter);

const categoriaRouter = require("./categoria.router");
router.use("/", categoriaRouter);

const clienteRouter = require("./cliente.router");
router.use("/", clienteRouter);

const domicilioRouter = require("./domicilio.router");
router.use("/", domicilioRouter);

const envioRouter = require("./envio.router");
router.use("/", envioRouter);

const imagenRouter = require("./imagen.router");
router.use("/", imagenRouter);

const localidadRouter = require("./localidad.router");
router.use("/", localidadRouter);

const mensajeRouter = require("./mensaje.router");
router.use("/", mensajeRouter);

const productoRouter = require("./producto.router");
router.use("/", productoRouter);

const productoxcategoriaRouter = require("./productoxcategoria.router");
router.use("/", productoxcategoriaRouter);

const provinciaRouter = require("./provincia.router");
router.use("/", provinciaRouter);

const usuarioRouter = require("./usuario.router");
router.use("/", usuarioRouter);

const ventaRouter = require("./venta.router");
router.use("/", ventaRouter);

const authRouter = require("./auth.router");
router.use("/", authRouter);


module.exports = router;