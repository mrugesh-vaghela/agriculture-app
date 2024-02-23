const Region = require("../models").Region;

const regionService = {};

regionService.creatRegion = (region) => {
  return Region.create(region);
};
module.exports = regionService;
