require("dotenv").config();

const express = require("express");
var cors = require("cors");

const appRoutes = require("./src/routes");
const json = require("./src/middlewares/json");
const responseFormat = require("./src/middlewares/responseFormat");
const exceptionHandler = require("./src/middlewares/exceptionHandler");
const notFoundHandler = require("./src/middlewares/notFoundHandler");

const app = express();
const port = 3000;

var corsOptions = {
  origin: ["http://localhost:5173", "https://huytrantuan.github.io"],
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: 300,
};

app.use(cors(corsOptions));

app.use(json);
app.use(responseFormat);

app.use("/api", appRoutes);
app.use(notFoundHandler);
app.use(exceptionHandler);

app.listen(port, "localhost", () => {
  console.log(`Example app listening http://localhost:${port}`);
});
