const router = require("express").Router();
const {
  installmentUserRegisterValidator,
} = require("../validations/installmentUserRegister");
const { userRegister, getRequests } = require("../controllers/installments");

router.post("/user-register", installmentUserRegisterValidator(), userRegister);
router.get("/requests", getRequests);

module.exports = router;
