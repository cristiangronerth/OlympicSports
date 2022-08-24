const express = require("express");
const { CreateCartItem, ModifyCartItem, DeleteCartItem } = require("../controllers/CartItem");
const router = express.Router();
const CartItem = require("../models/CartItem");

router.post("/", CreateCartItem);

router.delete("/:id", DeleteCartItem);

router.put("/:id", ModifyCartItem);

module.exports = router;
