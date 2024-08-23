const db = require("../model/index.model");

async function createCarrito(req, res) {
    const dataCarritos = req.body;

    try {
        const crearCarrito = await db.Carrito.create(
            {
                precio_total: dataCarritos.precio_total,
          
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Carrito Creado",
            mensaje: crearCarrito,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCarritos(req, res) {
    try {
        const carritos = await db.Carrito.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: carritos,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCarritoById(req, res) {
    const id = req.params.id;

    try {
        const carrito = await db.Carrito.findOne({
            where: { carrito_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: carrito,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateCarrito(req, res) {
    const id = req.params.id;
    const dataCarritos = req.body;

    try {
        const actualizaCarrito = await db.Carrito.update(
            {
                precio_total: dataCarritos.precio_total,
    
            },
            {
                where: { venta_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaCarrito,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteCarrito(req, res) {
    const id = req.params.id;

    try {
        const eliminaCarrito = await db.Carrito.destroy({
            where: { carrito_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaCarrito,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

module.exports = {
    createCarrito,
    getCarritos,
    getCarritoById,
    updateCarrito,
    deleteCarrito,
};