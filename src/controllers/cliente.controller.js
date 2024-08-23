const db = require("../model/index.model");

async function createCliente(req, res) {
    const dataClientes = req.body;

    try {
        const crearCliente = await db.Cliente.create(
            {
                nombre: dataClientes.nombre,
                apellido: dataClientes.apellido,                
                telefono: dataClientes.telefono,
                correo: dataClientes.correo,
                password: dataClientes.password,
            });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Cliente Creado",
            mensaje: crearCliente,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getClientes(req, res) {
    try {
        const clientes = await db.Cliente.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: clientes,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getClienteById(req, res) {
    const id = req.params.id;

    try {
        const cliente = await db.Cliente.findOne({
            where: { cliente_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: cliente,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}


async function updateCliente(req, res) {
    const id = req.params.id;
    const dataClientes = req.body;

    try {
        const actualizaCliente = await db.Cliente.update(
            {
                nombre: dataClientes.nombre,
                apellido: dataClientes.apellido,                
                telefono: dataClientes.telefono,
                correo: dataClientes.correo,
                password: dataClientes.password,
            },
            {
                where: { cliente_id: id },
            }
        );

        res.status(200).json({
            ok: true,
            status: 200,
            body: actualizaCliente,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function deleteCliente(req, res) {
    const id = req.params.id;

    try {
        const eliminaCliente = await db.Cliente.destroy({
            where: { cliente_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaCliente,
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
    createCliente,
    getClientes,
    getClienteById,
    updateCliente,
    deleteCliente,
};