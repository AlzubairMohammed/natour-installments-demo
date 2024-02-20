const { models } = require("../database/connection");
const { validationResult } = require("express-validator");
const httpStatus = require("../utils/httpStatus");
const errorResponse = require("../utils/errorResponse");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { appartments, appartment_images, cities, areas } = models;

exports.creatAppartment = asyncWrapper(async (req, res, next) => {
  return res.json(req.body);
});
