const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const validator = require('email-validator');
const User = require('../models/usuario');

// Validación de entrada del usuario
router.post('/login', async (req, res) => {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
        return res.status(400).json({ error: 'Debes proporcionar el nombre de usuario y una contraseña' });
    }

    if (!validator.validate(usuario)) {
        return res.status(400).json({ error: 'El usuario proporcionado no es válido' });
    }

    try {
        const user = await User.findOne({ usuario });

        if (!user) {
            return res.status(401).json({ error: 'El usuario o la contraseña son incorrectos' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'El usuario o la contraseña son incorrectos' });
        }

        // Devuelve solo la información necesaria del usuario
        return res.json({
            userId: user._id,
            nombre: user.nombre,
            usuario: user.usuario,
            password: user.contraseña,
            rol: user.roles
        });

    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;