const asyncWrapper = require("../middlewares/asyncWrapper.js");
const { models } = require("../database/connection");
const { installment_months } = models;
const httpStatus = require("../utils/httpStatus.js");
const errorResponse = require("../utils/errorResponse");
const { validationResult } = require("express-validator");
const axios = require("axios");
exports.monthPayment = asyncWrapper(async (req, res, next) => {
  const monthId = req.body.month_id;
  const data = {
    CustomerName: req.body.username,
    NotificationOption: "ALL",
    CustomerMobile: req.body.phone,
    CustomerEmail: req.body.email,
    InvoiceValue: 100,
    DisplayCurrencyIso: "AED",
    CallBackUrl: process.env.PAYMENT_CALLBACK,
    ErrorUrl: process.env.PAYMENT_ERROR_URL,
  };
  const header = {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + process.env.PAYMENT_TOKEN,
      "Content-Type": "application/json",
    },
  };
  await axios
    .post(process.env.MYFATOORAH_URL + "/v2/SendPayment", data, header)
    .then(async (response) => {
      if (response.status === 200 || response.status === 201) {
        await installment_months.update(
          { invoice_id: response.data.Data.InvoiceId },
          { where: { id: monthId } }
        );
        res.json({ status: httpStatus.SUCCESS, data: response.data });
      }
    })
    .catch((e) => {
      const error = errorResponse.create(e, 400, httpStatus.ERROR);
      return next(e);
    });
});

exports.paymentCallback = asyncWrapper(async (req, res, next) => {
  return res.render("paymentSuccess");
});
