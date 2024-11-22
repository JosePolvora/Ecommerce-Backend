const db = require("../model/index.model");

async function createComentario(req, res) {
    const dataComentarios = req.body;

    try {
        const crearComentario = await db.Comentario.create({
            nombre: dataComentarios.nombre,
            apellido: dataComentarios.apellido,
            email: dataComentarios.email,
            celular: dataComentarios.celular,
            comentario: dataComentarios.comentario,
            comentario_enviar: dataComentarios.comentario_enviar,
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Comentario Creado",
            comentario: crearComentario,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getComentarios(req, res) {
    try {
        const comentarios = await db.Comentario.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: comentarios,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

async function getComentarioById(req, res) {
    const id = req.params.id;

    try {
        const comentario = await db.Comentario.findOne({
            where: { comentario_id: id },
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: comentario,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: error.message,
        });
    }
}

// async function updateComentario(req, res) {
//     const id = req.params.id;
//     const dataComentarios = req.body;

//     try {
//         const actualizaComentario = await db.Comentario.update(
//             {
//                 nombre: dataComentarios.nombre,
//                 apellido: dataComentarios.apellido,
//                 email: dataComentarios.email,
//                 celular: dataComentarios.celular,
//                 comentario: dataComentarios.comentario,
//             },
//             {
//                 where: { comentario_id: id },
//             }
//         );

//         res.status(200).json({
//             ok: true,
//             status: 200,
//             body: actualizaComentario,
//         });
//     } catch (error) {
//         res.status(500).json({
//             ok: false,
//             status: 500,
//             message: error.message,
//         });
//     }
// }

async function deleteComentario(req, res) {
    const id = req.params.id;

    try {
        const eliminaComentario = await db.Comentario.destroy({
            where: { comentario_id: id },
        });

        res.status(204).json({
            ok: true,
            status: 204,
            body: eliminaComentario,
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
    createComentario,
    getComentarios,
    getComentarioById,
    //updateComentario,
    deleteComentario,
};
