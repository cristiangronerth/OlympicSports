const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db/db")


class CartItem extends Model {
  
}

CartItem.init(
    {

     quantity: {
        type: DataTypes.INTEGER,

        allowNull: false,
        defaultValue: 1,
     },

    },
    {
      sequelize,
      modelName: "cartItem",
    }
  );


  module.exports = CartItem