const express = require("express");
const router = express.Router();

const { CreateCartItem, ModifyCartItem, DeleteCartItem } = require("../controllers/CartItem");

router.post("/", CreateCartItem);

router.delete("/:id", DeleteCartItem);

router.put("/:id", ModifyCartItem);

module.exports = router;
