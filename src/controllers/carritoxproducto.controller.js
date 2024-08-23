const db = require("../model/index.model");

async function createCarritoxproducto(req, res) {
    const dataCarritoxproductos = req.body;

    try {
        const crearCarritoxproducto = await db.Carritoxproducto.create(
            {
                cantidad: dataCarritoxproductos.cantidad,
                precio_unitario: dataCarritoxproductos.precio_unitario,

            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Carritoxproducto Creado",
            mensaje: crearCarritoxproducto,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCarritoxproductos(req, res) {
    try {
        const carritoxproductos = await db.Carritoxproducto.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: carritoxproductos,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCarritoxproductoById(req, res) {
    const id = req.params.id;

    try {
        const carritoxproducto = await db.Carritoxproducto.findOne({
            where: { carritoxproducto_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: carritoxproducto,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateCarritoxproducto(req, res) {
    const id = req.params.id;
    const dataCarritoxproductos = req.body;

    try {
        const actualizaCarritoxproducto = await db.Carritoxproducto.update(
            {
                cantidad: dataCarritoxproductos.cantidad,
                precio_unitario: dataCarritoxproductos.precio_unitario,
               
            },
            {
                where: { carritoxproducto_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaCarritoxproducto,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteCarritoxproducto(req, res) {
    const id = req.params.id;

    try {
        const eliminaCarritoxproducto = await db.Carritoxproducto.destroy({
            where: { carritoxproducto_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaCarritoxproducto,
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
    createCarritoxproducto,
    getCarritoxproductos,
    getCarritoxproductoById,
    updateCarritoxproducto,
    deleteCarritoxproducto,
};