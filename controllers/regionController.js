const { STATUS_CODES, STATUS } = require("../constants/common");
const regionService = require("../services/regionService");
const { stringifyError } = require("../helpers/commonHelper");

const regionController = {};

regionController.createRegion = async (req, res) => {
  try {
    const region = {
      name: req.body.name,
      property_id: req.body.property_id,
      region_id: req.body.region_id,
    };
    const createdRegion = await regionService.creatRegion(region);
    return res.status(STATUS_CODES.SUCCESS).send({
      status: STATUS.SUCCESS,
      message: "Region created successfully.", //We should use localization here, but not part of the assignment
      data: createdRegion,
    });
  } catch (error) {
    return res.status(STATUS_CODES.ERROR).send({
      status: STATUS.ERROR,
      message: stringifyError(error),
    });
  }
};

module.exports = regionController;
