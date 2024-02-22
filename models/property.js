"use strict";
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define(
    "Property",
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
    { tableName: "properties" }
  );
  Property.associate = function (models) {
    // associations can be defined here
    Property.belongsTo(models.Organization, {
      foreignKey: "organization_id",
      onDelete: "CASCADE",
      as: "organization",
    });
  };
  return Property;
};
