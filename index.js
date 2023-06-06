const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const usuariosRuta = require("./src/routes/usuarios");
const reportesCivicosRutas = require("./src/routes/reportesCivicos");
const recorridosRutas = require("./src/routes/recorridosVirtuales");
const acercaRutas = require("./src/routes/acerca");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
    res.send("API PARA CAIH");
});

app.use('/api', usuariosRuta);
app.use('/api', reportesCivicosRutas);
app.use('/api', recorridosRutas);
app.use('/api', acercaRutas);

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGODBLURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.log("Error al conectar a MongoDB:", error));

// Iniciar el servidor
app.listen(port, () => console.log("Servidor escuchando en el puerto", port));
