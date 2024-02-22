const commonHelper = {};
commonHelper.stringifyError = (error) => {
  return error?.message ? error.message : "Something went wrong.";
};
module.exports = commonHelper;
