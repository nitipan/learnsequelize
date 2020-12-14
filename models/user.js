'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // associations can be defined here
      User.belongsTo(models.Group, {
        foreignKey: 'groupId',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
