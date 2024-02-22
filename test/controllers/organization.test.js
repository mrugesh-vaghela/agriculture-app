const sinon = require("sinon");
const httpMocks = require("node-mocks-http");
describe.only("Organization Controller", () => {
  let organizationController;
  let OrganizationModel;
  let UserModel;
  beforeEach(() => {
    organizationController = require("../../controllers/organizationController");
    OrganizationModel = require("../../models").Organization;
    UserModel = require("../../models").User;
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Create Organization", () => {
    let createOrgStub;
    let createUserStub;
    const organization_id = 1;
    beforeEach(() => {
      createOrgStub = sinon
        .stub(OrganizationModel, "create")
        .resolves({ id: organization_id });
      createUserStub = sinon.stub(UserModel, "create").resolves();
    });

    it("should create organization", async () => {
      //given
      const name = "My Org";
      const admin = {
        firstName: "Mrugesh",
        lastName: "Vaghela",
        email: "mrugesh@syngenta.com",
        password: "syngenta1234",
      };
      const req = httpMocks.createRequest({
        method: "POST",
        url: "/api/organization",
        body: {
          name,
          admin,
        },
      });
      const organization_id = 1;
      const res = httpMocks.createResponse();

      //when
      await organizationController.createOrganization(req, res);

      //then
      sinon.assert.calledOnceWithExactly(createOrgStub, {
        name,
      });
      sinon.assert.calledOnceWithExactly(createUserStub, {
        ...admin,
        role: "admin",
        organization_id,
      });
    });
  });
});
