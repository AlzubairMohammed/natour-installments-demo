const router = require("express").Router();
const { appartmentsValidator } = require("../validations/appartments");
const { creatAppartment } = require("../controllers/appartments");

router.post("/", appartmentsValidator(), creatAppartment);

module.exports = router;
