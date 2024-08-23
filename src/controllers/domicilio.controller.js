const db = require("../model/index.model");

async function createDomicilio(req, res) {
    const dataDomicilios = req.body;

    try {
        const crearDomicilio = await db.Domicilio.create(
            {
                calle: dataDomicilios.calle,
                numero: dataDomicilios.numero,
                piso: dataDomicilios.piso,
                departamento: dataDomicilios.departamento,

            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Domicilio Creado",
            mensaje: crearDomicilio,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getDomicilios(req, res) {
    try {
        const domicilios = await db.Domicilio.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: domicilios,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getDomicilioById(req, res) {
    const id = req.params.id;

    try {
        const domicilio = await db.Domicilio.findOne({
            where: { domicilio_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: domicilio,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateDomicilio(req, res) {
    const id = req.params.id;
    const dataDomicilios = req.body;

    try {
        const actualizaDomicilio = await db.Domicilio.update(
            {
                calle: dataDomicilios.calle,
                numero: dataDomicilios.numero,
                piso: dataDomicilios.piso,
                departamento: dataDomicilios.departamento,
            },
            {
                where: { domicilio_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaDomicilio,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteDomicilio(req, res) {
    const id = req.params.id;

    try {
        const eliminaDomicilio = await db.Domicilio.destroy({
            where: { domicilio_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaDomicilio,
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
    createDomicilio,
    getDomicilios,
    getDomicilioById,
    updateDomicilio,
    deleteDomicilio,
};