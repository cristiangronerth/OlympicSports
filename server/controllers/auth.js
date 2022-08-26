const User = require ("../models/User")
const { generateToken, validateToken } = require("../config/tokens");

const {validateAuth} = require("../middleware/auth")

// crear un usuario
exports.register = (req, res) => {
  const user = req.body;
  User.create(user).then(() => res.sendStatus(201));
};


// login usuario
exports.login = (req, res) => {
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

