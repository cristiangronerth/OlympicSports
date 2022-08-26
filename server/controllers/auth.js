const User = require ("../models/User")
const { generateToken, validateToken } = require("../config/tokens");
const {validateAuth} = require("../middleware/auth");
const { CartUser } = require("../models");


// crear un usuario
exports.register = (req, res) => {
  const user = req.body;
  User.create(user).then((user) => {
    CartUser.create({
      userId : user.id
    }).then(()=>res.sendStatus(201))
  });
};


// login usuario
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        state: user.state,
        city: user.city,
        address: user.address,
        zip: user.zip,
        phone: user.phone
      };

      const token = generateToken(payload); //

      res.cookie("token", token);

      res.send(payload); //
    });
  });
};

//valida si hay un usuario logueado, pedido de validar token
exports.validation = (req, res) => {
  res.send(req.user);
};

// logout
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};


// // editar users
// users.put("/profile", (req, res) => {
//   const userId = req.user.id;

//   User.update(req.body, {
//     where: { id: userId },
//     returning: true,   //preguntar
//   }).then(() => res.sendStatus(204));
// });



// // editar users
// users.put("/profile", (req, res) => {
//   const userId = req.user.id;

//   User.update(req.body, {
//     where: { id: userId },
//     returning: true,   //preguntar
//   }).then(() => res.sendStatus(204));
// });



// /****************************************** */



// //cambiar contraseña
// users.put("/changePassword", validateAuth,(req, res) => {
//   const userId = req.user.id;

//   User.update(req.body, {
//     where: { id: userId },
//     returning: true,    //preguntar
//     individualHooks: true,    //preguntar
//   }).then(() => res.sendStatus(204));
// });
