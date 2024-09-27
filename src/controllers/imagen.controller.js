const db = require("../model/index.model");

async function createImagen(req, res) {
    const imagenData = req.body;

    try {
        const nuevaImagen = await db.Imagen.create({
            ubicacion: imagenData.ubicacion,
            nro_orden: imagenData.nro_orden,
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Imagen creada exitosamente",
            imagen: nuevaImagen,
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
            imagenes: imagenes,
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
            imagen: imagen,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}
/////////////////////////////////////////////////
async function getImagenByProduct(req, res) {
    const id = req.params.id;

    try {
        const imagen = await db.Imagen.findAll({
            where: { producto_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            imagen: imagen,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

/////////////////////////////////////////////////


async function updateImagen(req, res) {
    const id = req.params.id;
    const imagenData = req.body;

    try {
        const [actualizaImagen] = await db.Imagen.update(
            {
                ubicacion: imagenData.ubicacion,
                nro_orden: imagenData.nro_orden,
            },
            {
                where: { imagen_id: id },
            }
        );

        if (!actualizaImagen) {
            return res.status(404).json({
                ok: false,
                status: 404,
                message: "Imagen no encontrada para actualizar",
            });
        }

        res.status(200).json({
            ok: true,
            status: 200,
            message: "Imagen actualizada exitosamente",
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

        if (!eliminaImagen) {
            return res.status(404).json({
                ok: false,
                status: 404,
                message: "Imagen no encontrada para eliminar",
            });
        }

        res.status(204).send();

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
    getImagenByProduct,
    updateImagen,
    deleteImagen,
};

