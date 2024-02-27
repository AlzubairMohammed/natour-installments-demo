const asyncWrapper = require("../middlewares/asyncWrapper.js");
const { models } = require("../database/connection");
const axios = require("axios");
const {
  installment_user_register,
  users,
  rents,
  out_appartments,
  installments,
  appartments,
  installment_months,
} = models;
const httpStatus = require("../utils/httpStatus.js");
const errorResponse = require("../utils/errorResponse");
const { validationResult } = require("express-validator");
exports.userRegister = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errorResponse.create(errors.array(), 400, httpStatus.FAIL);
    return next(error);
  }
  let data = await installment_user_register.create(req.body);
  req.body.rent.register_id = data.id;
  if (req.body.rent) data.rent = await out_appartments.create(req.body.rent);
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.getRequests = asyncWrapper(async (req, res, next) => {
  const data = await installment_user_register.findAll({
    include: [
      {
        model: users,
        as: "user",
      },
      {
        model: rents,
        as: "rent",
      },
      {
        model: out_appartments,
        as: "out_appartments",
      },
    ],
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.getInstallment = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const data = await installments.findOne({
    where: { id },
    include: [
      { model: appartments, as: "appartment" },
      { model: installment_user_register, as: "installment_user_register" },
      { model: installment_months, as: "installment_months" },
    ],
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.getInstallments = asyncWrapper(async (req, res, next) => {
  const data = await installments.findAll({
    include: [
      { model: appartments, as: "appartment" },
      { model: installment_user_register, as: "installment_user_register" },
      { model: installment_months, as: "installment_months" },
    ],
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.createInstallment = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errorResponse.create(errors.array(), 400, httpStatus.ERROR);
    next(error);
  }
  let data = await installments.create(req.body);
  const installment_id = data.id;
  let i = 8;
  while (i--) {
    await installment_months.create({ installment_id });
  }
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.updateInstallment = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errorResponse.create(errors.array(), 400, httpStatus.ERROR);
    next(error);
  }
  // const data = await
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.deleteInstallment = asyncWrapper(async (req, res, next) => {
  return res.json("Installment deleted");
});

exports.getUserInstallment = asyncWrapper(async (req, res, next) => {
  const user = await axios.get("http://localhost:8000/api/get-id", {
    headers: req.headers,
  });

  const data = await installment_user_register.findOne({
    where: { user_id: user.data },
    include: [
      {
        model: rents,
        as: "rent",
      },
      {
        model: out_appartments,
        as: "out_appartments",
      },
      {
        model: installments,
        as: "installments",
      },
    ],
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});
