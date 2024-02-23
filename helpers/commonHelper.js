const _ = require("lodash");
const commonHelper = {};
commonHelper.stringifyError = (error) => {
  return error?.message ? error.message : "Something went wrong.";
};

commonHelper.getEntityFields = (entityName, data) => {
  const entity = require("../models")[entityName];
  if (entity) {
    return _.pick(data, Object.keys(entity.fieldRawAttributesMap));
  }
};

module.exports = commonHelper;
