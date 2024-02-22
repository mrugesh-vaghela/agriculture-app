const userService = require("../services/userService");
const { STATUS, STATUS_CODES } = require("../constants/common");
const { stringifyError } = require("../helpers/commonHelper");

const userController = {};
userController.createUser = async (req, res) => {
  try {
    // We can validate the request body in middleware, but considering it is not a part of the assignment for now
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email, //we should also encrypt email as it is going to be used as username for login
      password: req.body.password, //we should encrypt password
      organization_id: req.body.organization_id,
    };
    const createdUser = await userService.creatUser(data);
    return res.status(STATUS_CODES.SUCCESS).send({
      status: STATUS.SUCCESS,
      message: "User created successfully.", //We should use localization here, but not part of the assignment
      data: createdUser,
    });
  } catch (error) {
    return res.status(STATUS_CODES.ERROR).send({
      status: STATUS.ERROR,
      message: stringifyError(error),
    });
  }
};
module.exports = userController;
