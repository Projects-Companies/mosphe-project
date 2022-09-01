const express = require("express");
const categoryRouter = express.Router();

const {
  getCategory,
  postCategory,
  patchCategory,
  deleteCategory,
} = require("../controller/category.controller");

categoryRouter.get("/category", getCategory);
categoryRouter.post("/category", postCategory);
categoryRouter.patch("/category/:c_id", patchCategory);
categoryRouter.delete("/category/:c_id", deleteCategory);

module.exports = { categoryRouter };
