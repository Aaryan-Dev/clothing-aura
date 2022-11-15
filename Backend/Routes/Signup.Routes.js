const { Router } = require("express");
const { SignupController } = require("../Controllers/Signup.controller");

const SignupRoute = Router();

SignupRoute.post("/", SignupController());

module.exports = {
    SignupRoute
    
}