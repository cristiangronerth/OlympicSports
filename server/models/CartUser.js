const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db/db")


class CartUser extends Model {
  
}

CartUser.init(
    {
     total: {
        type: DataTypes.INTEGER,
        allowNull: false,
     }
    },
    {
      sequelize,
      modelName: "cartUser",
    }
  );


  module.exports = CartUser