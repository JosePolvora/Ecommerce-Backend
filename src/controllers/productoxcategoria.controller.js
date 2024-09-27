const db = require("../model/index.model");

async function createProductoxcategoria(req, res) {
    const dataProductoxcategoria = req.body;

    try {
        const crearProductoxcategoria = await db.Productoxcategoria.create(
            {
                producto_id: dataProductoxcategoria.producto_id,
                categoria_id: dataProductoxcategoria.categoria_id,
                estado: dataProductoxcategoria.estado,
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Productoxcategoria Creado",
            mensaje: crearProductoxcategoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getProductoxcategorias(req, res) {
    try {
        const productoxcategorias = await db.Productoxcategoria.findAll({
            include: [
                {
                    model: db.Producto,
                    attributes: ['imagen', 'nombre', 'precio', "descripcion", "disponible"]
                },
                {
                    model: db.Categoria,
                    attributes: ['nombre', "descripcion", "estado"]
                }
            ]
        });


        res.status(200).json({
            ok: true,
            status: 200,
            body: productoxcategorias,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getProductoxcategoriaById(req, res) {
    const id = req.params.id;

    try {
        const productoxcategoria = await db.Productoxcategoria.findOne({
            where: { productoxcategoria_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: productoxcategoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function updateProductoxcategoria(req, res) {
    const id = req.params.id;
    const dataProductoxcategoria = req.body;

    try {
        const actualizaProductoxcategoria = await db.Productoxcategoria.update(
            {
                estado: dataProductoxcategoria.estado,
            },
            {
                where: { productoxcategoria_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaProductoxcategoria,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteProductoxcategoria(req, res) {
    const id = req.params.id;

    try {
        const eliminaProductoxcategoria = await db.Productoxcategoria.destroy({
            where: { productoxcategoria_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaProductoxcategoria,
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
    createProductoxcategoria,
    getProductoxcategorias,
    getProductoxcategoriaById,
    updateProductoxcategoria,
    deleteProductoxcategoria,
};