const { Model } = require("sequelize");
const db = require("../model/index.model");

async function createProducto(req, res) {
    const dataProductos = req.body;

    try {
        const NuevoProducto = await db.Producto.create(
            {
                nombre: dataProductos.nombre,
                precio: dataProductos.precio,
                descripcion: dataProductos.descripcion,
                imagen: dataProductos.imagen,
                disponible: dataProductos.disponible,
            });
        // console.log(NuevoProducto);
        //console.log(dataProductos);
        const crearProductoxcategoria = await db.Productoxcategoria.create(
            {
                productoProductoId: NuevoProducto.producto_id,
                categoriaCategoriaId: dataProductos.categoria,
            });


        res.status(201).json({
            ok: true,
            status: 201,
            message: "Producto Creado",
            mensaje: NuevoProducto,
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

async function getProductoByCategoria(req, res) {
    const id = req.params.id;
    try {
        const productos = await db.Productoxcategoria.findAll(
            {
                include: [
                    {
                        model: db.Producto,
                    }

                ],
                where: { categoriaCategoriaId: id },
            }
        );

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

async function getListaProductos(req, res) {
    const pagina = parseInt(req.query.pagina) || 1;
    const cantidad = parseInt(req.query.cantidad) || 8;

    try {
        const productos = await db.Producto.findAndCountAll({
            offset: (pagina - 1) * cantidad,
            limit: cantidad,
        });

        res.status(200).json({
            ok: true,
            status: 200,
            totalRegistros: productos.count,
            totalPaginas: Math.ceil(productos.count / cantidad),
            paginaActual: pagina,
            body: productos.rows,
        });

    } catch (error) {
        console.error("Error al obtener el listado de productos:", error.message);
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de productos",
            status: 500,
            error: error.message,
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
                disponible: dataProductos.disponible,
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
    getProductoByCategoria,
    getListaProductos,
};