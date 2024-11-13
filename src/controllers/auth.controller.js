const db = require("../model/index.model");
const bcrypt = require('bcrypt');

// Registro de usuario

async function register(req, res) {
    const dataUsuarios = req.body;

    try {
        // Verificar si el email ya está registrado
        const usuarioExistente = await db.Usuario.findOne({ where: { email: dataUsuarios.email } });
        if (usuarioExistente) {
            return res.status(400).json({
                ok: false,
                message: "El email ya está registrado",
            });
        }

        // Hashear la clave antes de guardarla
        const hashedClave = await bcrypt.hash(dataUsuarios.clave, 10);

        // Crear el nuevo usuario
        const crearUsuario = await db.Usuario.create({
            nombre: dataUsuarios.nombre,
            apellido: dataUsuarios.apellido,
            email: dataUsuarios.email,
            clave: hashedClave, // Almacenamos la clave hasheada
            rol: dataUsuarios.rol,
            fechaNacimiento: dataUsuarios.fechaNacimiento,
            dni: dataUsuarios.dni,
            activo: dataUsuarios.activo || 'activo',
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Usuario creado con éxito",
            usuario: crearUsuario,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Error en el registro",
            error: error.message,
        });
    }
}

// Inicio de sesión (Login)
async function login(req, res) {
    const { email, clave } = req.body;

    try {
        // Buscar el usuario por email
        const usuario = await db.Usuario.findOne({ where: { email } });

        // Verificar si el usuario existe y si la clave es correcta
        if (!usuario) {
            return res.status(401).json({
                ok: false,
                message: "Usuario no encontrado",
            });
        }

        // Comparar la clave en texto plano con la clave encriptada
        const claveValida = await bcrypt.compare(clave, usuario.clave);
        if (!claveValida) {
            return res.status(401).json({
                ok: false,
                message: "Clave incorrecta",
            });
        }

        // Si las credenciales son correctas
        res.status(200).json({
            ok: true,
            message: "Inicio de sesión exitoso",
            usuario: {
                id: usuario.usuario_id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol,
            },
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Error en el inicio de sesión",
            error: error.message,
        });
    }
}


module.exports = {
    register,
    login,
};
