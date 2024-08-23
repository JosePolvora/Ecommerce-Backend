const db = require("../model/index.model");

async function createLocalidad(req, res) {
    const dataLocalidades = req.body;

    try {
        const crearLocalidad = await db.Localidad.create(
            {
                nombre: dataLocalidades.nombre,
                codigo_postal: dataLocalidades.codigo_postal,                
            
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Localidad Creada",
            mensaje: crearLocalidad,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getLocalidades(req, res) {
    try {
        const localidades = await db.Localidad.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: localidades,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getLocalidadById(req, res) {
    const id = req.params.id;

    try {
        const localidad = await db.Localidad.findOne({
            where: { localidad_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: localidad,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateLocalidad(req, res) {
    const id = req.params.id;
    const dataLocalidades = req.body;

    try {
        const actualizaLocalidad = await db.Localidad.update(
            {
                nombre: dataLocalidades.nombre,
                codigo_postal: dataLocalidades.codigo_postal,
            },
            {
                where: { localidad_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaLocalidad,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteLocalidad(req, res) {
    const id = req.params.id;

    try {
        const eliminaLocalidad = await db.Localidad.destroy({
            where: { localidad_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaLocalidad,
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
    createLocalidad,
    getLocalidades,
    getLocalidadById,
    updateLocalidad,
    deleteLocalidad,
};