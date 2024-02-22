"use strict";
const { USER_STATUS } = require("../constants/db_constants");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: {
        allowNull:false,
        type: DataTypes.ENUM,
        values: [USER_STATUS.ACTIVE, USER_STATUS.DELETED, USER_STATUS.INACTIVE],
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { tableName: "users" }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Organization, {
      foreignKey: "organization_id",
      as: "organization",
    });
  };
  return User;
};
