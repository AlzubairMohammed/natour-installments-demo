const { body } = require("express-validator");

exports.installmentUserRegisterValidator = () => {
  return [
    body("rent_id").isInt("Rent id must be integer ."),
    body("name")
      .notEmpty("Name can't be null .")
      .isString("Name must be string format ."),
    body("email").isEmail(
      "Email must be in email format like name@provider.com ."
    ),
    body("phone").isMobilePhone("Phone must in right format ."),
    body("have_family").isBoolean("This field must be boolean ."),
    body("salary").isDecimal("Field must be decimal ."),
    body("nationality").isString("Field must be string ."),
    body("gender").isInt("Field must be integer ."),
    body("more_info"),
    body("user_id").isEmpty("Field can't be null"),
    body("expect_rent_date")
      .isDate("Field must be in date format")
      .notEmpty("Field can't be null"),
  ];
};
