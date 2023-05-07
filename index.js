const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productosRuta = require("./src/routes/productos");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.json());
app.use('/api', productosRuta);

//routes
app.get("/", (req, res) => {
    res.send("API REST hola");
});

// mongodb connection 
// local: "mongodb://localhost:27017/miBaseDeDatos"
// Online: process.env.MONGODBURI

mongoose
    .connect(process.env. MONGODBURI)
    .then(() => console.log("connected to MongoDB Atlas"))
    .catch((error) => console.log(error));

app.listen(port, () => console.log("server listening", port));
