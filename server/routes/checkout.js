const express = require("express");
const { Product, CartItem } = require("../models");

const nodemailer = require("nodemailer");

const User = require("../models/User");
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "olympicsportsp5",
        pass: "plataforma5",
    }
})


//para mostrar en el front los datos del usuario(domicilio) y los productos asociados en el momento
router.get("/", (req, res) => {
  const { userId } = req.body;
  User.findOne({
    where: {
      id: userId,
    },
    include: { model: Product, where: {userId: userId}}
  });
});

router.delete("/", (req,res)=> {
    const { userId } = req.body;
    CartItem.destroy({
        where:{
            userId : userId
        }
    })
    .then(() => res.sendStatus(204))
    .catch((error) => {
      console.log("Error to delete item", error);
    });
})


module.exports = router;
