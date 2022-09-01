const express = require("express");
const subCategoryRouter = express.Router();

const {
  getSubcategory,
  postSubcategory,
  patchSubcategory,
  deleteSubcategory,
} = require("../controller/sub_category.controller");

subCategoryRouter.get("/sub_category", getSubcategory);
subCategoryRouter.post("/sub_category", postSubcategory);
subCategoryRouter.patch("/sub_category/:s_id", patchSubcategory);
subCategoryRouter.delete("/sub_category/:s_id", deleteSubcategory);

module.exports = { subCategoryRouter };
