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
  Crop.associate = function (models) {
    // associations can be defined here
    Crop.belongsTo(models.Field, {
      foreignKey: "field_id",
      onDelete: "CASCADE",
      as: "field",
    });
  };
  return Crop;
};
