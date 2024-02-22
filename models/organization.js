"use strict";
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    "Organization",
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
      name: DataTypes.STRING,
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,      
    },
    { tableName: "organizations" }
  );
  Organization.associate = function (models) {
    // associations can be defined here
    Organization.hasMany(models.Property, {
      foreignKey: "id",
      as: "properties",
    });
    Organization.hasMany(models.User, {
      foreignKey: "id",
      as: "users",
    });
  };
  return Organization;
};
