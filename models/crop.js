"use strict";
module.exports = (sequelize, DataTypes) => {
  const Crop = sequelize.define(
    "Crop",
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
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { tableName: "crops" }
  );
  return Crop;
};
