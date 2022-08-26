const { CartUser, User } = require("../models");
const { generateToken } = require("../config/tokens");

// register
exports.register = (req, res) => {
  const user = req.body;
  User.create(user).then((user) => {
    CartUser.create({
      userId : user.id
    }).then(()=>res.sendStatus(201))
  });
};


// login
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
