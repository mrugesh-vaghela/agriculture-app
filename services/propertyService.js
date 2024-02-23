const Property = require("../models").Property;

const propertyService = {};

propertyService.creatProperty = (property) => {
  return Property.create(property);
};
module.exports = propertyService;
