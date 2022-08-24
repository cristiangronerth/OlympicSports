const express = require("express");
const User = require ("../models/User")

const  AuthAdmin  = require("../middleware/auth");


const users = express.Router(); 


const { generateToken, validateToken } = require("../config/tokens");

const {validateAuth} = require("../middleware/auth")     
const userAdmin = express.Router()




// elimina un usuario por su ID
userAdmin.delete("/delete/:id", AuthAdmin, (req, res) =>{
  const idUsuario = parseInt(req.params.id)
  Users.destroy({where: {id: idUsuario}})
    .then(()=> res.sendStatus(200))
    .catch(err=> console.log(err))
})


//trae todos los usuarios.
userAdmin.get('/users',(req,res)=>{
  User.findAll()
  .then(users=>res.status(200).send(users))
  .catch(err=> console.log(err))
})


module.exports = userAdmin;