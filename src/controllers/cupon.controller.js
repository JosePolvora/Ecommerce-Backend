const db = require("../model/index.model");

async function createCupon(req, res) {
    const dataCupones = req.body;

    try {
        const crearCupon = await db.Cupon.create({
            codigo: dataCupones.codigo,
            descuento: dataCupones.descuento,
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Cupón creado",
            cupon: crearCupon,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCupones(req, res) {
    try {
        const cupones = await db.Cupon.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: cupones,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getCuponById(req, res) {
    const id = req.params.id;

    try {
        const cupon = await db.Cupon.findOne({
            where: { cupon_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: cupon,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function updateCupon(req, res) {
    const id = req.params.id;
    const dataCupones = req.body;

    try {
        const actualizaCupon = await db.Cupon.update(
            {
                codigo: dataCupones.codigo,
                descuento: dataCupones.descuento,
            },
            {
                where: { cupon_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaCupon,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteCupon(req, res) {
    const id = req.params.id;

    try {
        const eliminaCupon = await db.Cupon.destroy({
            where: { cupon_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            message: "Cupón eliminado",
            body: eliminaCupon,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function validarCupon(req, res) {
    const { codigo } = req.body;

    try {
       
        const cupon = await db.Cupon.findOne({
            where: { codigo }
        });

        if (!cupon) {
            return res.status(404).json({
                ok: false,
                message: "Código de cupón no válido",
            });
        }

        
        res.status(200).json({
            ok: true,
            descuento: cupon.descuento,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

module.exports = {
    createCupon,
    getCupones,
    getCuponById,
    updateCupon,
    deleteCupon,
    validarCupon,
};
