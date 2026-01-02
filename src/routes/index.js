const express = require("express");
const router = express.Router();

const taskRoute = require("./tasks.route");

router.get("/test-success", function (_, res) {
  res.success({ message: "Hello world" });
});
router.get("/test-error", function () {
  throw new Error("Test exception!");
});
router.use("/tasks", taskRoute);

module.exports = router;
