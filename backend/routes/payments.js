const router = require("express").Router();

const { monthPayment } = require("../controllers/payments");

router.post("/", monthPayment);
router.get("/error", (req, res) => {
  return res.render("paymentError");
});

module.exports = router;
