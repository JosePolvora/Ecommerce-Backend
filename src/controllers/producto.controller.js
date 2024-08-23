const db = require("../model/index.model");

async function createProducto(req, res) {
    const dataProductos = req.body;

    try {
        const crearProducto = await db.Producto.create(
            {
                nombre: dataProductos.nombre,
                precio: dataProductos.precio,                
                descripcion: dataProductos.descripcion,
                imagen: dataProductos.imagen,
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Producto Creado",
            mensaje: crearProducto,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getProductos(req, res) {
    try {
        const productos = await db.Producto.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: productos,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getProductoById(req, res) {
    const id = req.params.id;

    try {
        const producto = await db.Producto.findOne({
            where: { producto_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: producto,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateProducto(req, res) {
    const id = req.params.id;
    const dataProductos = req.body;

    try {
        const actualizaProducto = await db.Producto.update(
            {
                nombre: dataProductos.nombre,
                precio: dataProductos.precio,
                descripcion: dataProductos.descripcion,
                imagen: dataProductos.imagen,
            },
            {
                where: { producto_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaProducto,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteProducto(req, res) {
    const id = req.params.id;

    try {
        const eliminaProducto = await db.Producto.destroy({
            where: { producto_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaProducto,
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
    createProducto,
    getProductos,
    getProductoById,
    updateProducto,
    deleteProducto,
};