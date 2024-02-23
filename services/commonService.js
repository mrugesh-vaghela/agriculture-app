const commonService = {};

commonService.create = (entityName, data) => {
  const entity = require('../models/')[entityName];
  if (!entity) {
    throw new Error(`Wrong data passed for ${entity}`);
  }
  return entity.create(data);
};
module.exports = commonService;
