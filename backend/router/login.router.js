const express = require("express");
const registerRouter = express.Router();

const {
  getRegister,
  postRegister,
  postLogin
} = require("../controller/register.controller");

registerRouter.get("/register", getRegister);
registerRouter.post("/register", postRegister);
registerRouter.post("/login", postLogin);

module.exports = { registerRouter };
