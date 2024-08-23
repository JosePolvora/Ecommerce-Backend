const db = require("../model/index.model");

async function createVenta(req, res) {
    const dataVentas = req.body;

    try {
        const crearVenta = await db.Venta.create(
            {
                fecha: dataVentas.fecha,
                fecha_envio: dataVentas.fecha_envio,
                estado: dataVentas.estado,
                medio_depago: dataVentas.medio_depago,
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Venta Creada",
            mensaje: crearVenta,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getVentas(req, res) {
    try {
        const ventas = await db.Venta.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: ventas,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getVentaById(req, res) {
    const id = req.params.id;

    try {
        const venta = await db.Venta.findOne({
            where: { venta_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: venta,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateVenta(req, res) {
    const id = req.params.id;
    const dataVentas = req.body;

    try {
        const actualizaVenta = await db.Usuario.update(
            {
                fecha: dataVentas.fecha,
                fecha_envio: dataVentas.fecha_envio,
                estado: dataVentas.estado,
                medio_depago: dataVentas.medio_depago,
            },
            {
                where: { venta_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaVenta,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteVenta(req, res) {
    const id = req.params.id;

    try {
        const eliminaVenta = await db.Venta.destroy({
            where: { venta_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaVenta,
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
    createVenta,
    getVentas,
    getVentaById,
    updateVenta,
    deleteVenta,
};