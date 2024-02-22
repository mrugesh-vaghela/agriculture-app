"use strict";
module.exports = (sequelize, DataTypes) => {
  const Field = sequelize.define(
    "Field",
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
      size: DataTypes.STRING,
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
    { tableName: "fields" }
  );
  Field.associate = function (models) {
    // associations can be defined here
    Field.belongsTo(models.Region, {
      foreignKey: "region_id",
      onDelete: "CASCADE",
      as: "region",
    });    
  };
  return Field;
};
