const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const validator = require('email-validator');
const User = require('../models/usuario');

// Validación de entrada del correo
router.post('/login', async (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ error: 'Debes proporcionar el nombre de correo y una contraseña' });
    }

    if (!validator.validate(correo)) {
        return res.status(400).json({ error: 'El correo proporcionado no es válido' });
    }

    try {
        const user = await User.findOne({ correo });

        if (!user) {
            return res.status(401).json({ error: 'El correo o la contraseña son incorrectos' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'El correo o la contraseña son incorrectos' });
        }

        // Devuelve solo la información necesaria del correo
        return res.json({
            userId: user._id,
            nombre: user.nombre,
            correo: user.correo,
            rol: user.roles
        });

    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;