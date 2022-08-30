const { CartHistory, CartUser, CartItem } = require("../models");

exports.getAllCartHistory = (req, res) => {
  console.log(req);
  CartHistory.findOne({ where: { id: req.body.id } })
    .then((history) => {
      if (!history) res.send({ message: "No tienes ninguna compra aun !" });
      else {
        CartHistory.findAll({ where: { id: req.body.id } }).then((result) =>
          res.send(result)
        );
      }
    })
    .catch((err) => console.log(err));
};

exports.createCartHistory = (req, res) => {
  CartItem.findAll({ where: { userId: 1 } })
    .then((resul) => {
      const productos = [];
      const quantity = [];
      for (i = 0; resul.length > i; i++) {
        productos.push(resul[i].dataValues.productId);
        quantity.push(resul[i].dataValues.quantity);
      }
      return [productos, quantity];
    })
    .then((productsIdsAndQuantity) => {
      CartHistory.create({
        products: productsIdsAndQuantity[0],
        quantityForProduct: productsIdsAndQuantity[1],
        userId: 1,
      }).then((cartHistory) => {
        CartUser.findOne({ where: { userId: 1 } })
          .then((cartUser) => {
            CartHistory.update(
              { total: cartUser.dataValues.total },
              { where: { id: cartHistory.dataValues.id } }
            );
          })
          .then(() => res.sendStatus(200));
      });
    });
};
