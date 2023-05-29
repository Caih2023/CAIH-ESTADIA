const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const usuariosRuta = require("./src/routes/usuarios");
const reportesCivicosRutas = require("./src/routes/reportesCivicos");
const recorridosRutas = require("./src/routes/recorridosVirtuales");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Rutas
app.get("/", (req, res) => {
    res.send("API REST");
});

app.use('/api', usuariosRuta);
app.use('/api', reportesCivicosRutas);
app.use('/api', recorridosRutas);

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGODBURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.log("Error al conectar a MongoDB:", error));

// Iniciar el servidor
app.listen(port, () => console.log("Servidor escuchando en el puerto", port));