const express = require("express");
const { CartItem } = require("../models");
const User = require("../models/User");
const router = express.Router();

const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const accountTransport = require ("../config/account_transport.json")

const oauth2Client = new OAuth2(
  accountTransport.auth.clientId,
  accountTransport.auth.clientSecret,
  "https://developers.google.com/oauthplayground",
)
oauth2Client.setCredentials({refresh_token: accountTransport.auth.refreshToken,})

async function sendMail() {
  try{
    const user2 = await User.findOne({where: {id: 1}}) //ver como buscar el usuario
    const accessToken = await oauth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "olympicsportsp5@gmail.com",
        clientId: accountTransport.auth.clientId,
        clientSecret: accountTransport.auth.clientSecret,
        refreshToken: accountTransport.auth.refreshToken,
        accessToken: accessToken
      }
    })
    const mailOptions = {
      from: "olympicsportsp5@gmail.com",
      to: `${user2.dataValues.email}`, //"yauckgaston@gmail.com"
      subject: "Compra OlympicSports",
      text: "Muchas gracias por tu compra! Esperamos que vuelvas",
      html: "<h1>Muchas gracias por tu compra! Esperamos que vuelvas<h1>"
    }
    const result = await transport.sendMail(mailOptions)
    return result

  } catch (error) {
    return error
  }
}

/* sendMail().then(result=> console.log("Email sent....",result))
.catch(error=>console.log(error.message)) */


//para mostrar en el front los datos del usuario(domicilio) y los productos asociados en el momento
router.get("/", (req, res) => {
  const { userId } = req.body;
  User.findOne({
    where: {
      id: userId,
    }
  })
  .then((user)=> res.status(204).send(user))
});

router.delete("/", (req,res)=> {
    const { userId } = req.body;
    CartItem.destroy({
        where:{
            userId : userId
        }
    })
    .then(()=>sendMail()
    .then(result=> console.log("Email sent....",result)))
    .then(() => res.sendStatus(204))
    .catch((error) => {
      console.log("Error to delete item", error);
    });
})


module.exports = router;
