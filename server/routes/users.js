const express = require ("express");
const { generateToken, validateToken } = require("../config/tokens");
const users = express.Router(); 
const User = require ("../models/User")
const {validateAuth} = require("../middleware/auth")

// crear un usuario

users.post("/register", (req, res)=>{
  user.create (req.body).then((user)=>{
    res.status(201).send(user)
  })
})


//*********************************** */


// login usuario
users.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        provice: user.province,
        city: user.city,
        adress: user.adress,
        postalCode: user.postalCode,
        phone: user.phone
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

/********************************************** */


//validar si hay un usuario logueado, pedido de validar token
users.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});


/****************************************** */

// logout
users.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});


/****************************************** */


// editar users
users.put("/profile", (req, res) => {
  const userId = req.user.id;

  User.update(req.body, {
    where: { id: userId },
    returning: true,
  }).then(() => res.sendStatus(204));
});



/****************************************** */











/****************************************** */

//trae todos los usuarios.
users.get('/',(req,res)=>{
  Users.findAll()
  .then(users=>res.status(200).send(users))
  .catch(err=> console.log(err))
})





// elimina un usuario por su ID
users.delete("/delete/:id", (req, res) =>{
  const idUsuario = parseInt(req.params.id)
  Users.destroy({where: {id: idUsuario}})
    .then(()=> res.sendStatus(200))
    .catch(err=> console.log(err))
})





module.exports = users;

