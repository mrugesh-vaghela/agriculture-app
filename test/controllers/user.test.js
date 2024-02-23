const sinon = require("sinon");
const httpMocks = require("node-mocks-http");
describe("User Controller", () => {
  let userController;
  let UserModel;
  beforeEach(() => {
    userController = require("../../controllers/userController");
    UserModel = require("../../models").User;
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Create User", () => {
    let createStub;
    beforeEach(() => {
      createStub = sinon.stub(UserModel, "create").resolves();
    });

    it("should create user", async () => {
      //given
      const body = {
        firstName: "Mrugesh",
        lastName: "Vaghela",
        email: "mrugesh@syngenta.com",
        password: "syngenta1234",
        organization_id: 1,
      };
      const req = httpMocks.createRequest({
        method: "POST",
        url: "/api/user",
        body,
      });
      const res = httpMocks.createResponse();

      //when
      await userController.createUser(req, res);

      //then
      sinon.assert.calledOnceWithExactly(createStub, body);
    });
  });
});
