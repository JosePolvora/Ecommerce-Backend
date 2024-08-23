const db = require("../model/index.model");

async function createProvincia(req, res) {
    const dataProvincias = req.body;

    try {
        const crearProvincia = await db.Provincia.create(
            {
                nombre: dataProvincias.nombre,               
            
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Provincia Creada",
            mensaje: crearProvincia,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getProvincias(req, res) {
    try {
        const provincias = await db.Provincia.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: provincias,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getProvinciaById(req, res) {
    const id = req.params.id;

    try {
        const provincia = await db.Provincia.findOne({
            where: { provincia_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: provincia,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateProvincia(req, res) {
    const id = req.params.id;
    const dataProvincias = req.body;

    try {
        const actualizaProvincia = await db.Provincia.update(
            {
                nombre: dataProvincias.nombre,
                
            },
            {
                where: { provincia_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaProvincia,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteProvincia(req, res) {
    const id = req.params.id;

    try {
        const eliminaProvincia = await db.Provincia.destroy({
            where: { provincia_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaProvincia,
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
    createProvincia,
    getProvincias,
    getProvinciaById,
    updateProvincia,
    deleteProvincia,
};