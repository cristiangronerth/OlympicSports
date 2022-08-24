const User = require("../models/User")
const Product = require("../models/Product")
const CartUser = require("../models/CartUser")
const CartItem = require("../models/CartItem")


//CartItem.hasMany(Product)
CartUser.hasMany(CartItem)
CartUser.belongsTo(User)
CartItem.belongsTo(Product)


module.exports = {User, Product,CartUser,CartItem}