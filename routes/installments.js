const router = require("express").Router();
const {
  installmentUserRegisterValidator,
} = require("../validations/installmentUserRegister");
const {
  userRegister,
  getRequests,
  getInstallment,
  getInstallments,
  createInstallment,
  deleteInstallment,
  updateInstallment,
} = require("../controllers/installments");

router.post("/user-register", installmentUserRegisterValidator(), userRegister);
router.get("/requests", getRequests);
router
  .get("/", getInstallments)
  .post("/", createInstallment)
  .get("/:id", getInstallment)
  .delete("/:id", deleteInstallment)
  .put("/:id", updateInstallment);
module.exports = router;
