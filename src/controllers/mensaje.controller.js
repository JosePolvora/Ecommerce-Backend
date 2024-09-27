const db = require("../model/index.model");

async function createMensaje(req, res) {
    const dataMensajes = req.body;

    try {
        const crearMensaje = await db.Mensaje.create(
            {
                nombre: dataMensajes.nombre,
                apellido: dataMensajes.apellido,
                email: dataMensajes.email,
                celular: dataMensajes.celular,
                mensaje: dataMensajes.mensaje,
                mensaje_enviar: dataMensajes.mensaje_enviar,
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Mensaje Creado",
            mensaje: crearMensaje,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getMensajes(req, res) {
    try {
        const mensajes = await db.Mensaje.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: mensajes,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getMensajeById(req, res) {
    const id = req.params.id;

    try {
        const mensaje = await db.Mensaje.findOne({
            where: { mensaje_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: mensaje,
        });
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateMensaje(req, res) {
    const id = req.params.id;
    const dataMensajes = req.body;

    try {
        const actualizaMensaje = await db.Mensaje.update(
            {
                nombre: dataMensajes.nombre,
                apellido: dataMensajes.apellido,
                email: dataMensajes.email,
                celular: dataMensajes.celular,
                mensaje: dataMensajes.mensaje,
            },
            {
                where: { mensaje_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaMensaje,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteMensaje(req, res) {
    const id = req.params.id;

    try {
        const eliminaMensaje = await db.Mensaje.destroy({
            where: { mensaje_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaMensaje,
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
    createMensaje,
    getMensajes,
    getMensajeById,
    updateMensaje,
    deleteMensaje,
};