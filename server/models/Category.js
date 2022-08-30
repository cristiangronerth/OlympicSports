const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db/db")


class Category extends Model {
  
}

Category.init(
    {

      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      }

    },
    {
      sequelize,
      modelName: "category",
    }
  );


  module.exports = Category