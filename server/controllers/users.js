const { User } = require ("../models")

//cambiar a admin
exports.admin = (req, res) =>{
  const { id } = req.params;

  User.findByPk(id)
    .then(user=>{
      user.update({admin : true})
      res.sendStatus(204)
    })
}

// editar users
exports.profile = (req, res) => { 
  const userId = req.params.id;

  User.update(req.body, {
    where: { id: userId },
    returning: true,        
  }).then(() => res.sendStatus(204));
};



// cambiar contraseÃ±a
exports.changePassword = (req, res) => {
  const userId = req.user.id;

  User.update(req.body, {
    where: { id: userId },
    returning: true,          
    individualHooks: true,    
  }).then(() => res.sendStatus(204));
};

// traer todos los usuarios
exports.users = (req, res) => {
  User.findAll()
  .then((users) => res.send(users));
};

// traer un usuario
exports.user = (req, res) => {
  const { id } = req.params;
  User.findOne({
    where: { id: id }    
  }) 
  .then((user) => res.send(user));

};
