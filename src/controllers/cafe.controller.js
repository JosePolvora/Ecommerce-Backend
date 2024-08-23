// const db = require("../model/index.model");

// async function createCafe(req, res) {
//     const dataCafes = req.body;

//     try {
//         const crearCafe = await db.Cafe.create(
//             {
//                 nombre: dataCafes.nombre,
//                 precio: dataCafes.precio,
//                 descripcion: dataCafes.descripcion,
//                 imagen: dataCafes.imagen,
//             });

//         res.status(201).json({
//             ok: true,
//             status: 201,
//             message: "Cafe Creado",
//             mensaje: crearCafe,
//         });
//     } catch (error) {
//         res.status(500).json({
//             ok: false,
//             status: 500,
//             message: error.message,
//         });
//     }
// }

// async function getCafes(req, res) {
//     try {
//         const cafes = await db.Cafe.findAll();
//         res.status(200).json({
//             ok: true,
//             status: 200,
//             body: cafes,
//         });

//     } catch (error) {
//         res.status(500).json({
//             ok: false,
//             status: 500,
//             message: error.message,
//         });
//     }
// }

// async function getCafeById(req, res) {
//     const id = req.params.id;

//     try {
//         const cafe = await db.Cafe.findOne({
//             where: { cafe_id: id },
//         });

//         res.status(200).json({
//             ok: true,
//             status: 200,
//             body: cafe,
//         });

//     } catch (error) {
//         res.status(500).json({
//             ok: false,
//             status: 500,
//             message: error.message,
//         });
//     }
// }


// async function updateCafe(req, res) {
//     const id = req.params.id;
//     const dataCafes = req.body;

//     try {
//         const actualizaCafe = await db.Cafe.update(
//             {
//                 nombre: dataCafes.nombre,
//                 precio: dataCafes.precio,
//                 descripcion: dataCafes.descripcion,
//                 imagen: dataCafes.imagen,
//             },
//             {
//                 where: { cafe_id: id },
//             }
//         );

//         res.status(200).json({
//             ok: true,
//             status: 200,
//             body: actualizaCafe,
//         });

//     } catch (error) {
//         res.status(500).json({
//             ok: false,
//             status: 500,
//             message: error.message,
//         });
//     }
// }

// async function deleteCafe(req, res) {
//     const id = req.params.id;

//     try {
//         const eliminaCafe = await db.Cafe.destroy({
//             where: { cafe_id: id },
//         });

//         res.status(204).json({
//             ok: true,
//             status: 204,
//             body: eliminaCafe,
//         });
//     } catch (error) {
//         res.status(500).json({
//             ok: false,
//             status: 500,
//             message: error.message,
//         });
//     }
// }

// module.exports = {
//     createCafe,
//     getCafes,
//     getCafeById,
//     updateCafe,
//     deleteCafe,
// };