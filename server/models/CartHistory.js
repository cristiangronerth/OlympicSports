const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db/db")


class CartHistory extends Model {
  
}

CartHistory.init(
    {
        quantity:{
            type: DataTypes.INTEGER
        }

    },
    {
      sequelize,
      modelName: "carthistory",
    }
  );


  module.exports = CartHistory