const express = require("express");
const registerRouter = express.Router();

const {
  getRegister,
  postRegister,
} = require("../controller/register.controller");

registerRouter.get("/register", getRegister);
registerRouter.post("/register", postRegister);

module.exports = { registerRouter };
