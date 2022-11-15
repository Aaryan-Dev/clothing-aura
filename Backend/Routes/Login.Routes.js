const { Router } = require("express");
const { LoginController } = require("../Controllers/Login.controller");


const LoginRoute = Router();

LoginRoute.post("/", LoginController());

module.exports = {
    LoginRoute
}