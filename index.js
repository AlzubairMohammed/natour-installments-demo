const express = require("express");
const app = express();
require("dotenv").config();
const installments = require("./routes/installments");
const appartments = require("./routes/appartments");

const httpStatus = require("./utils/httpStatus");

app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const URL = process.env.ROUTES_URL;
app.use(`${URL}/installments`, installments);
app.use(`${URL}/appartments`, appartments);

app.use(express.static("."));
// global error handler
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatus.ERROR,
    message: error.message,
    code: error.statusCode || 500,
    data: null,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`app running at ${PORT}`);
});
