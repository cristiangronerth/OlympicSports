const express = require("express");
const { getAllCartHistory, createCartHistory } = require("../controllers/cartHistory");
const { validateAuth } = require("../middleware/auth");
const cartHistory = express.Router();


// a este verbo hay que ponerle el validateAuth cuando la aplicacion funcione correctamente y reemplazar el "1" en userId:1 por req.user.id
cartHistory.get("/", getAllCartHistory);
// a este verbo hay que ponerle el validateAuth cuando la aplicacion funcione correctamente y reemplazar el "1" en userId:1 por req.user.id
cartHistory.post("/agregarAHistorial", createCartHistory);
module.exports = cartHistory;
