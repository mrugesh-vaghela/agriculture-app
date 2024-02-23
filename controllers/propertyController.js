const { STATUS_CODES, STATUS } = require("../constants/common");
const propertyService = require("../services/propertyService");
const { stringifyError } = require("../helpers/commonHelper");
const propertyController = {};

propertyController.createProperty = async (req, res) => {
  try {
    const property = {
      name: req.body.name,
      organization_id: req.body.organization_id,
    };
    const createdProperty = await propertyService.creatProperty(property);
    return res.status(STATUS_CODES.SUCCESS).send({
      status: STATUS.SUCCESS,
      message: "Propery created successfully.", //We should use localization here, but not part of the assignment
      data: createdProperty,
    });
  } catch (error) {
    return res.status(STATUS_CODES.ERROR).send({
      status: STATUS.ERROR,
      message: stringifyError(error),
    });
  }
};

module.exports = propertyController;
