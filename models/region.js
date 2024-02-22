"use strict";
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
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
    { tableName: "regions" }
  );
  Region.associate = function (models) {
    // associations can be defined here
    Region.belongsTo(models.Property, {
      foreignKey: "property_id",
      onDelete: "CASCADE",
      as: "property",
    });
    // Region has many regions
    Region.hasMany(models.Region, {
      foreignKey: "region_id",
      as: "regions",
    });
  };
  return Region;
};
