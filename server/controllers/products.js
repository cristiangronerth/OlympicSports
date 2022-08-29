const { Product } = require("../models/");
const { Op } = require("sequelize");

exports.createProduct = (req, res) => {
  const {
    name,
    image,
    color,
    description,
    size,
    brand,
    price,
    stock,
    categoria,
  } = req.body;

  Product.findOne({
    where: {
      name: name,
      color: color,
      size: size,
      brand: brand,
      categoria: categoria,
    },
  }).then((product) => {
    if (!product) {
      Product.create({
        name,
        image,
        color,
        description,
        size,
        brand,
        price,
        stock,
        categoria,
      })
        .then(() => res.sendStatus(201))
        .catch((err) => console.log(err));
    } else {
      product.update({ stock: product.stock + req.body.stock });
      res.send({ body: "sumado al stock" });
    }
  });
};

exports.getProduct = (req, res) => {
  const { productId } = req.query;

  Product.findAll({
    where: {
      id : productId
    },
  })
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
};

exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then((productos) => res.send(productos))
    .catch((err) => console.log(err));
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;
  Product.update(req.body, { where: { id: id } })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log(err));
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.destroy({ where: { id: id } })
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res) => {

  const { categoria } = req.query

  Product.findAll({
    where: {
      categoria: categoria
    },
  })
    .then((productos) => res.send(productos))
    .catch((err) => console.log(err));
};

exports.getProductSearch = (req, res) => {
  const search = req.params.search;
  Product.findAll({
    where: {
      [Op.or]: [
        { name: search },
        { color: search },
        { size: search },
        { brand: search },
        { categoria: search },
      ],
    },
  })
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
};
