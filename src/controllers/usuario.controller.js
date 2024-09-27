const db = require("../model/index.model");


async function createUsuario(req, res) {
    const dataUsuarios = req.body;

    try {
        const crearUsuario = await db.Usuario.create(
            {
                nombre: dataUsuarios.nombre,
                apellido: dataUsuarios.apellido,
                email: dataUsuarios.email,
                clave: dataUsuarios.clave,
                rol: dataUsuarios.rol,
                fechaNacimiento: dataUsuarios.fechaNacimiento,
                dni: dataUsuarios.dni,
                activo: dataUsuarios.activo,
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Usuario Creado",
            mensaje: crearUsuario,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getUsuarios(req, res) {
    try {
        const usuarios = await db.Usuario.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: usuarios,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getUsuarioById(req, res) {
    const id = req.params.id;

    try {
        const usuario = await db.Usuario.findOne({
            where: { usuario_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: usuario,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function updateUsuario(req, res) {
    const id = req.params.id;
    const dataUsuarios = req.body;

    try {
        const actualizaUsuario = await db.Usuario.update(
            {
                nombre: dataUsuarios.nombre,
                apellido: dataUsuarios.apellido,
                email: dataUsuarios.email,
                clave: dataUsuarios.clave,
                rol: dataUsuarios.rol,
                fechaNacimiento: dataUsuarios.fechaNacimiento,
                dni: dataUsuarios.dni,
                activo: dataUsuarios.activo,
            },
            {
                where: { usuario_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaUsuario,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteUsuario(req, res) {
    const id = req.params.id;

    try {
        const eliminaUsuario = await db.Usuario.destroy({
            where: { usuario_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaUsuario,
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
    createUsuario,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
};