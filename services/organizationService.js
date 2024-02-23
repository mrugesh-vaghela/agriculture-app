const Organization = require("../models").Organization;

const organizationService = {};

organizationService.createOrganization = (organization) => {
  return Organization.create(organization);
};
organizationService.getOrganizationByUuid = (uuid) => {
  return Organization.findOne({ where: { uuid } });
};
module.exports = organizationService;
