const express = require("express");
const cartHistory = express.Router();

const { CartHistory } = require("../models");

cartHistory.get("/", (req, res) => {
  CartHistory.findOne({ where: { id: req.body.id } })
    .then(history => {
        if(!history) res.send({message: "No tienes ninguna compra aun !"})
        else{
            CartHistory.findAll({ where: { id: req.body.id } })
            .then(result => res.send(result))
        }
    })
    .catch((err) => console.log(err));
});
module.exports = cartHistory;
