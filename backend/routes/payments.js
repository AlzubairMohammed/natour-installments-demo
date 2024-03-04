const router = require("express").Router();

const { monthPayment, paymentCallback } = require("../controllers/payments");

router.post("/", monthPayment);
router.get("/error", (req, res) => {
  return res.render("paymentError");
});
router.get("/success", paymentCallback);

module.exports = router;
