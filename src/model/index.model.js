const sequelize = require('../config/app.config.js');
const { Sequelize } = require('sequelize');


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Definiciones de modelos

db.Carrito = require("./carrito.model.js")(sequelize, Sequelize);
db.Carritoxproducto = require("./carritoxproducto.model.js")(sequelize, Sequelize);
db.Categoria = require("./categoria.model.js")(sequelize, Sequelize);
db.Cliente = require("./cliente.model.js")(sequelize, Sequelize);
db.Domicilio = require("./domicilio.model.js")(sequelize, Sequelize);
db.Envio = require("./envio.model.js")(sequelize, Sequelize);
db.Imagen = require("./imagen.model.js")(sequelize, Sequelize);
db.Localidad = require("./localidad.model.js")(sequelize, Sequelize);
db.Producto = require("./producto.model.js")(sequelize, Sequelize);
db.Productoxcategoria = require("./productoxcategoria.model.js")(sequelize, Sequelize);
db.Provincia = require("./provincia.model.js")(sequelize, Sequelize);
db.Usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.Venta = require("./venta.model.js")(sequelize, Sequelize);



// relacion 1 a muchos
// una provincia puede tener muchas localidades
db.Provincia.hasMany(db.Localidad);

// relacion muchos a 1
// un localidad pertenece a una sola Provincia
db.Localidad.belongsTo(db.Provincia);

// relacion 1 a muchos
// una localidad puede tener muchos domicilios
db.Localidad.hasMany(db.Domicilio);

// relacion muchos a 1
// un domicilio pertenece a una localidad
db.Domicilio.belongsTo(db.Localidad);

// relacion 1 a muchos
// Un cliente puede tener muchos carritos
db.Cliente.hasMany(db.Carrito);

// relacion muchos a 1
// un carrito pertenece a un cliente
db.Carrito.belongsTo(db.Cliente);

// relacion 1 a muchos
// Un cliente puede tener muchas ventas
db.Cliente.hasMany(db.Venta);

// relacion muchos a 1
// una venta pertenece a un cliente
db.Venta.belongsTo(db.Cliente);

// relacion muchos a 1
db.Imagen.belongsTo(db.Producto);



// relacion 1 a 1

// Un domicilio puede tener un envio
db.Domicilio.hasMany(db.Envio);

// Una venta puede tener un envio
db.Venta.hasMany(db.Envio);

// Un cliente puede tener un domicilio
db.Cliente.hasMany(db.Domicilio);

// Un carrito puede tener una venta
db.Carrito.hasMany(db.Venta);


// relaciones muchos a muchos

// un producto puede tener muchos productoxcategoria
db.Producto.hasMany(db.Productoxcategoria);

// una categoria puede tener muchos productoxcategoria
db.Categoria.hasMany(db.Productoxcategoria);

// un producto puede tener muchas categoriaxproducto
db.Producto.hasMany(db.Carritoxproducto);

// una carrito puede tener muchas categoriaxproducto
db.Carrito.hasMany(db.Carritoxproducto);



module.exports = db;





