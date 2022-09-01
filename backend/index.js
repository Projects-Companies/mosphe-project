const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { categoryRouter } = require("./router/category.router");
const { subCategoryRouter } = require("./router/sub_category.router");
const { registerRouter } = require("./router/login.router");

app.use("/", categoryRouter);
app.use("/", subCategoryRouter);
app.use("/", registerRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
