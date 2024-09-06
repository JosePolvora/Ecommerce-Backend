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