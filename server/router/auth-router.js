//route handlers hote h iske khud k-> routes ko modular bnane k kaam ata h
//const home = require("../controllers/auth-controller")
//const {home,register} = require("../controllers/auth-controller")
// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome to authorisation pg ");
// })
const express = require("express");
const router = express.Router();

const authcontrollers = require("../controllers/auth-controller");
const signupschema = require("../validators/auth-validator");
const loginschema = require("../validators/login-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authcontrollers.home); //another way of app.get(path,(req,res)=>{}) using router

router
  .route("/register")
  .post(validate(signupschema), authcontrollers.register);
router.route("/login").post(validate(loginschema), authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user); // authMiddleware: to check user k paas jwt token h ki ni...i.e. vo user logged in h ki ni

module.exports = router;
