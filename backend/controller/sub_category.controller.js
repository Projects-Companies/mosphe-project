const { con } = require("../model/db.model");

const getSubcategory = async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM sub_category";
    await con.query(sqlQuery, (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      }

      res.send({ Status: 200, Response: result });
    });
  } catch (error) {
    console.log(error.sqlMessage);
  }
};

const postSubcategory = async (req, res) => {
  try {
    const data = req.body;
    const sqlQuery = "INSERT INTO sub_category SET ?";
    await con.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      }

      res.send({ Status: 200, Response: result });
    });
  } catch (error) {
    console.log(error.sqlMessage);
  }
};

const patchSubcategory = async (req, res) => {
  try {
    const data = [req.body, req.params.s_id];
    const sqlQuery = "UPDATE sub_category SET ? WHERE s_id = ?";
    await con.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      }

      res.send({ Status: 200, Response: result });
    });
  } catch (error) {
    console.log(error.sqlMessage);
  }
};

const deleteSubcategory = async (req, res) => {
  try {
    const data = req.params.s_id;
    const sqlQuery = "DELETE FROM sub_category WHERE s_id = ?";
    await con.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      }

      res.send({ Status: 200, Response: result });
    });
  } catch (error) {
    console.log(error.sqlMessage);
  }
};

module.exports = {
  getSubcategory,
  postSubcategory,
  patchSubcategory,
  deleteSubcategory,
};
