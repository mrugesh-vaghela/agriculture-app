const userService = require("../services/userService");
const organizationService = require("../services/organizationService");
const { STATUS_CODES, STATUS } = require("../constants/common");
const { stringifyError } = require("../helpers/commonHelper");
const organizationController = {};
organizationController.createOrganization = async (req, res) => {
  //create the admin user for the organization while creating the organization
  try {
    const organization = {
      name: req.body.name,
    };
    const createdOrg = await organizationService.createOrganization(
      organization
    );
    // We can validate the request body in middleware, but considering it is not a part of the assignment for now
    const adminUser = {
      firstName: req.body.admin.firstName,
      lastName: req.body.admin.lastName,
      email: req.body.admin.email, //we should also encrypt email as it is going to be used as username for login
      password: req.body.admin.password, //we should encrypt password
      organization_id: createdOrg.id,
    };
    const createdUser = await userService.createAdminUser(adminUser);
    return res.status(STATUS_CODES.SUCCESS).send({
      status: STATUS.SUCCESS,
      message: "Organization created successfully.", //We should use localization here, but not part of the assignment
      data: createdUser,
    });
  } catch (error) {
    return res.status(STATUS_CODES.ERROR).send({
      status: STATUS.ERROR,
      message: stringifyError(error),
    });
  }
};
module.exports = organizationController;
