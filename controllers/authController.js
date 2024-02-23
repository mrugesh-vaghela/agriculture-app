const jwt  = require('jsonwebtoken')
const { STATUS_CODES, STATUS } = require("../constants/common");
const { stringifyError } = require("../helpers/commonHelper");
const authController = {};

authController.isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json("Unauthorize user");

  try {
    const decoded = jwt.verify(token, 'YOUR KEY');
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(STATUS_CODES.UNAUTHENTICATED).send({
      status: STATUS.ERROR,
      message: "You are not authorized to access",
    });
  }

  next();
};

authController.getToken = async (req, res) => {
  try {
    var request = require("request");

    var options = {
      method: "POST",
      url: "https://{auth_domain}/oauth/token",
      headers: { "content-type": "application/json" },
      body: '{"client_id":"client_id","client_secret":"client_secrete","audience":"audience","grant_type":"client_credentials"}',
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      return res.status(STATUS_CODES.ERROR).send({
        status: STATUS.SUCCESS,
        data: JSON.parse(body),
      });
    });
  } catch (error) {
    return res.status(STATUS_CODES.ERROR).send({
      status: STATUS.ERROR,
      message: stringifyError(error),
    });
  }
};

module.exports = authController;
