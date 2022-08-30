const { CartUser, User } = require("../models");
const { generateToken } = require("../config/tokens");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "860870041014-ouinu3c3c7162n61tuqnlubvrv7dlv3i.apps.googleusercontent.com"
);

// register
exports.register = (req, res) => {
  const user = req.body;
  const isRegistered = User.findAll({where: {email}})
    if(isRegistered[0]){
      res.status(401).send("email ya registrado")
    }else{
      User.create(user).then((user) => {
        CartUser.create({
          userId : user.id
        }).then(()=>res.sendStatus(201))
    });
  }
}


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


exports.googlelogin = (req, res) => {
  const { credential } = req.body;

  client
    .verifyIdToken({
      idToken: credential,
      audience:
        "860870041014-ouinu3c3c7162n61tuqnlubvrv7dlv3i.apps.googleusercontent.com",
    })
    .then((userInfo) => {
      const { email, given_name, family_name } = userInfo.payload;

      let password = email + email;

      User.findOne({
        where: { email: email },
      }).then((user) => {
        if (!user) {
          return User.create({email: email, password: password, name: given_name, lastname: family_name})
            .then((user) => {
              user.validatePassword(password).then((isValid) => {
                if (!isValid) return res.send(401);

                const payload = {
                  id: user.id,
                  email: user.email,
                  name: user.name,
                  lastname: user.lastname,
                };
                const token = tokens.generateToken(payload);
                res.cookie("token", token);
                res.sendStatus(201);
              })
            });
        }

        user.validatePassword(password).then((isValid) => {
          if (!isValid) return res.send(401);

          const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
          };
          const token = tokens.generateToken(payload);
          res.cookie("token", token);
          res.sendStatus(201);
        });
      });
    });
};