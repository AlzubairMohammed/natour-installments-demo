const router = require("express").Router();

router.post("/", (req, res) => {
  return res.json("hi");
});

module.exports = router;
