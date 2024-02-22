"use strict";
module.exports = (sequelize, DataTypes) => {
  const CropCycle = sequelize.define(
    "CropCycle",
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
      startAt: DataTypes.DATE,
      endAt: DataTypes.DATE,
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
    { tableName: "crop_cycles" }
  );
  CropCycle.associate = function (models) {
    // associations can be defined here
    CropCycle.belongsTo(models.Field, {
      foreignKey: "field_id",
      onDelete: "CASCADE",
      as: "field",
    });
    CropCycle.belongsTo(models.Crop, {
        foreignKey: "crop_id",
        onDelete: "CASCADE",
        as: "crop",
      });
  };
  return CropCycle;
};
