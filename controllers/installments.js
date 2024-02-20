const asyncWrapper = require("../middlewares/asyncWrapper.js");
const { models } = require("../database/connection");
const httpStatus = require("../utils/httpStatus.js");
const errorResponse = require("../utils/errorResponse");
const { validationResult } = require("express-validator");
exports.installmentUserRegister = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errorResponse.create(errors.array(), 400, httpStatus.FAIL);
    return next(error);
  }
  const data = await models.installment_user_register.create(req.body);
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.getInstallmentsRequests = asyncWrapper(async (req, res, next) => {
  const data = await models.installment_user_register.findAll({
    include: [
      {
        model: models.users,
        as: "user",
      },
      {
        model: models.rents,
        as: "rent",
      },
    ],
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});
