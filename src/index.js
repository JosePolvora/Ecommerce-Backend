// const express = require("express");
// const cors = require('cors');  // npm i cors
// const app = express();

// app.use(cors());

// // Puerto Principal
// // const PUERTO = process.env.PORT || 3000;


// // Routing Principal
// app.get("/", (req, res) => {
//     res.send("Bienvenidos a Express.!!");
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// // Todas la RUTAS //

// const carritoRouter = require("./router/carrito.router");
// app.use("/api", carritoRouter);

// const carritoxproductoRouter = require("./router/carritoxproducto.router");
// app.use("/api", carritoxproductoRouter);

// const categoriaRouter = require("./router/categoria.router");
// app.use("/api", categoriaRouter);

// const clienteRouter = require("./router/cliente.router");
// app.use("/api", clienteRouter);

// const domicilioRouter = require("./router/domicilio.router");
// app.use("/api", domicilioRouter);

// const envioRouter = require("./router/envio.router");
// app.use("/api", envioRouter);

// const imagenRouter = require("./router/imagen.router");
// app.use("/api", imagenRouter);

// const localidadRouter = require("./router/localidad.router");
// app.use("/api", localidadRouter);

// const productoRouter = require("./router/producto.router");
// app.use("/api", productoRouter);

// const productoxcategoriaRouter = require("./router/productoxcategoria.router");
// app.use("/api", productoxcategoriaRouter);

// const provinciaRouter = require("./router/provincia.router");
// app.use("/api", provinciaRouter);

// const usuarioRouter = require("./router/usuario.router");
// app.use("/api", usuarioRouter);

// const ventaRouter = require("./router/venta.router");
// app.use("/api", ventaRouter);


// // llamar a base de datos
// const db = require("./model/index.model");


// // conectar al motor de DB  // .sync({alter:true})

// db.sequelize
//     .sync({ alter: true })
//     .then((result) => {
//         console.log("BASE DE DATOS SINCRONIZADA");
//     })
//     .catch((err) => {
//         console.log("ERROR EN SINCRONOZACION DE BASE DE DATOS");
//         console.log(err);
//     });


// // Puerto Principal
// const PUERTO = process.env.PORT || 3000;

// app.listen(PUERTO, () => {
//     console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);

// });

const express = require("express");
const cors = require('cors');
const db = require("./model/index.model");
const router = require("./router/index.router");
const app = express();


app.get("/", (req, res) => {
    res.send("Bienvenidos a Express.!!");
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar rutas principales desde el router
app.use("/api", router);

// Conectar al motor de DB
db.sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("BASE DE DATOS SINCRONIZADA");
    })
    .catch((err) => {
        console.log("ERROR EN SINCRONOZACION DE BASE DE DATOS");
        console.log(err);
    });

// Puerto Principal
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});