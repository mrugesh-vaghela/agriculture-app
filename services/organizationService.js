const Organization = require("../models").Organization;

const organizationService = {};

organizationService.createOrganization = (organization) => {
  return Organization.create(organization);
};
module.exports = organizationService;
