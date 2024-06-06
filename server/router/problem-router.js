const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
//const adminMiddleware = require("../middlewares/admin-middleware");

const problemController = require("../controllers/problem-controller");

router
  .route("/")
  .get(authMiddleware, problemController.AllProblemsHomePage);

module.exports = router;
