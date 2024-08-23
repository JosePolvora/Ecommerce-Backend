const e = require("express");
const db = require("../model/index.model");

async function createImagen(req, res) {
    const dataImagenes = req.body;

    try {
        const crearImagen = await db.Imagen.create(
            {
                nombre: dataImagenes.nombre,
                descripcion: dataImagenes.descripcion,
              
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Imagen Creada",
            mensaje: crearImagen,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getImagenes(req, res) {
    try {
        const imagenes = await db.Imagen.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: imagenes,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getImagenById(req, res) {
    const id = req.params.id;

    try {
        const imagen = await db.Imagen.findOne({
            where: { imagen_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: imagen,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateImagen(req, res) {
    const id = req.params.id;
    const dataImagenes = req.body;

    try {
        const actualizaImagen = await db.Imagen.update(
            {
                nombre: dataImagenes.nombre,
                descripcion: dataImagenes.descripcion,
    
            },
            {
                where: { imagen_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaImagen,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteImagen(req, res) {
    const id = req.params.id;

    try {
        const eliminaImagen = await db.Imagen.destroy({
            where: { imagen_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaImagen,
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
    createImagen,
    getImagenes,
    getImagenById,
    updateImagen,
    deleteImagen,
};