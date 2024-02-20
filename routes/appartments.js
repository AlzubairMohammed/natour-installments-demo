const router = require("express").Router();

const { creatAppartment } = require("../controllers/appartments");

router.post("/", creatAppartment);

module.exports = router;
