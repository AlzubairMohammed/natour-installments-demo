const router = require("express").Router();
const { appartmentsValidator } = require("../validations/appartments");
const {
  creatAppartment,
  getAppartment,
  getAppartments,
} = require("../controllers/appartments");

router
  .post("/", appartmentsValidator(), creatAppartment)
  .get("/:id", getAppartment)
  .get("/", getAppartments);

module.exports = router;
