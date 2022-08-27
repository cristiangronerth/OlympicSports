const { CartUser, CartItem } = require("../models");

exports.CreateCartItem = (req, res) => {
  const id = req.body.id
  CartUser.findOne({where:{
    id : 1 //esto es el id del usuario
  }})
  .then((cartUser)=>{
    CartItem.findOne({ where: { productId: req.body.productId, userId: 1} }).then(
      (item) => {
        if (!item) {
          CartItem.create(req.body)
            .then((item) => {
              cartUser.addCartItem(item.dataValues.id)
              res.sendStatus(201)
            })
            .catch((error) => {
              console.log("Error to create item", error);
            });
        } else {
          item.update({ quantity: item.quantity + 1 });
          res.sendStatus(201);
        }
      }
    );
  })
  
};

exports.DeleteCartItem = (req, res) => {
  const id = req.params.id;
  CartItem.destroy({
    where: {
      id: id,
    },
  })
    .then(() => res.sendStatus(204))
    .catch((error) => {
      console.log("Error to delete item", error);
    });
};

exports.ModifyCartItem = (req, res) => {
  const id = req.params.id;
  CartItem.update(req.body, { where: { id: id }, returning: true })
    .then(([row, itemUpdated]) => res.status(201).send(itemUpdated))
    .catch((error) => {
      console.log("Error to modify item", error);
    });
};


/* CartItem.findOne({ where: { productId: req.body.productId, userId: req.body.userId } }).then(
  (item) => {
    if (!item) {
      CartItem.create(req.body)
        .then((item) => res.status(201).send(item))
        .catch((error) => {
          console.log("Error to create item", error);
        });
    } else {
      item.update({ quantity: item.quantity + 1 });
      res.sendStatus(201);
    }
  }
); */