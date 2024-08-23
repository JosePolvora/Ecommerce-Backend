const e = require("express");
const db = require("../model/index.model");

async function createEnvio(req, res) {
    const dataEnvios = req.body;

    try {
        const crearEnvio = await db.Envio.create(
            {
                metodo_envio: dataEnvios.metodo_envio,
                precio_envio: dataEnvios.precio_envio,
                estado: dataEnvios.estado,
                fecha_envio: dataEnvios.fecha_envio,
          
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Envio Creado",
            mensaje: crearEnvio,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getEnvios(req, res) {
    try {
        const envios = await db.Envio.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: envios,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getEnvioById(req, res) {
    const id = req.params.id;

    try {
        const envio = await db.Envio.findOne({
            where: { envio_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: envio,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateEnvio(req, res) {
    const id = req.params.id;
    const dataEnvios = req.body;

    try {
        const actualizaEnvio = await db.Envio.update(
            {
                metodo_envio: dataEnvios.metodo_envio,
                precio_envio: dataEnvios.precio_envio,
                estado: dataEnvios.estado,
                fecha_envio: dataEnvios.fecha_envio,
    
            },
            {
                where: { envio_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaEnvio,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteEnvio(req, res) {
    const id = req.params.id;

    try {
        const eliminaEnvio = await db.Envio.destroy({
            where: { envio_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaEnvio,
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
    createEnvio,
    getEnvios,
    getEnvioById,
    updateEnvio,
    deleteEnvio,
};