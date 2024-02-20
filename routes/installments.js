const router = require("express").Router();
const {
  installmentUserRegisterValidator,
} = require("../validations/installmentUserRegister");
const {
  installmentUserRegister,
  getInstallmentsRequests,
} = require("../controllers/installments");

router.post(
  "/user-register",
  installmentUserRegisterValidator(),
  installmentUserRegister
);
router.get("/requests", getInstallmentsRequests);

module.exports = router;
