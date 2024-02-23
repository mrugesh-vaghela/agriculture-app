const { STATUS_CODES, STATUS } = require("../constants/common");
const reportService = require("../services/reportService");
const { stringifyError } = require("../helpers/commonHelper");

const reportController = {};

reportController.getCropCyclesByField = async (req, res) => {
    try {
        const cropCycles = await reportService.getCropCyclesByField(
          req.query.field_id
        );
        return res.status(STATUS_CODES.SUCCESS).send({
          status: STATUS.SUCCESS,
          message: "Crop cycles fetched successfully", //We should use localization here, but not part of the assignment
          data: cropCycles,
        });
      } catch (error) {
        return res.status(STATUS_CODES.ERROR).send({
          status: STATUS.ERROR,
          message: stringifyError(error),
        });
      }
};
reportController.getCropCyclesByProperty = async (req, res) => {
  try {
      const cropCycles = await reportService.getCropCyclesByProperty(
        req.query.property_id
      );
      return res.status(STATUS_CODES.SUCCESS).send({
        status: STATUS.SUCCESS,
        message: "Crop cycles fetched successfully", //We should use localization here, but not part of the assignment
        data: cropCycles,
      });
    } catch (error) {
      return res.status(STATUS_CODES.ERROR).send({
        status: STATUS.ERROR,
        message: stringifyError(error),
      });
    }
};

module.exports = reportController;
