const jwt  = require('jsonwebtoken')
const { STATUS_CODES, STATUS } = require("../constants/common");
const { stringifyError } = require("../helpers/commonHelper");
const authController = {};

authController.isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json("Unauthorize user");

  try {
    const decoded = jwt.verify(token, 'W9BUPjZ1y95sRL1Rwmoce823Vyu3Wjspu3OkR4dqXnmhdFq-5p6nyACHlv-iM0mi');
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
      url: "https://dev-f8bchczh21t5tvvn.us.auth0.com/oauth/token",
      headers: { "content-type": "application/json" },
      body: '{"client_id":"LCL1edwJ8YtI86ySGirecxCNZxagwfqw","client_secret":"W9BUPjZ1y95sRL1Rwmoce823Vyu3Wjspu3OkR4dqXnmhdFq-5p6nyACHlv-iM0mi","audience":"https://dev-f8bchczh21t5tvvn.us.auth0.com/api/v2/","grant_type":"client_credentials"}',
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
