const { STATUS_CODES, STATUS } = require("../constants/common");
const commonService = require("../services/commonService");
const { getEntityFields, stringifyError } = require("../helpers/commonHelper");
const commonController = {};

commonController.create = async (req, res) => {
  try {
    const entityName = req.body.entityName;
    const data = getEntityFields(entityName, req.body.data);
    const createdRegion = await commonService.create(entityName, data);
    return res.status(STATUS_CODES.SUCCESS).send({
      status: STATUS.SUCCESS,
      message: `${entityName} created successfully.`, //We should use localization here, but not part of the assignment
      data: createdRegion,
    });
  } catch (error) {
    return res.status(STATUS_CODES.ERROR).send({
      status: STATUS.ERROR,
      message: stringifyError(error),
    });
  }
};

module.exports = commonController;
