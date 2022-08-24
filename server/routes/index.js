const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const productsRouter = require("./products");
const cartItemRouter = require("./cartItem");

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/cartItem", cartItemRouter);

module.exports = router;