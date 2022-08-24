const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const productsRouter = require("./products");

const cartItemRouter = require("./cartItem")
const userAdminRouter = require ("./userAdmin")
const {validateAuth} = require("../middleware/auth")


router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/cartItem", cartItemRouter);
router.use("/userAdmin", userAdminRouter)

module.exports = router;