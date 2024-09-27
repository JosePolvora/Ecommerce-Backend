const db = require("../model/index.model");

async function createCategoria(req, res) {
    const dataCategorias = req.body;

    try {
        const crearCategoria = await db.Categoria.create(
            {
                nombre: dataCategorias.nombre,
                descripcion: dataCategorias.descripcion,
                estado: dataCategorias.estado,
                
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Categoria Creado",
            mensaje: crearCategoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCategorias(req, res) {
    try {
        const categorias = await db.Categoria.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: categorias,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCategoriaById(req, res) {
    const id = req.params.id;

    try {
        const categoria = await db.Categoria.findOne({
            where: { categoria_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: categoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateCategoria(req, res) {
    const id = req.params.id;
    const dataCategorias = req.body;

    try {
        const actualizaCategoria = await db.Categoria.update(
            {
                nombre: dataCategorias.nombre,
                descripcion: dataCategorias.descripcion,
                estado: dataCategorias.estado,
              
            },
            {
                where: { categoria_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaCategoria,
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteCategoria(req, res) {
    const id = req.params.id;

    try {
        const eliminaCategoria = await db.Categoria.destroy({
            where: { categoria_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaCategoria,
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
    createCategoria,
    getCategorias,
    getCategoriaById,
    updateCategoria,
    deleteCategoria,
};