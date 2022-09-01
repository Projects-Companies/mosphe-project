const { con } = require("../model/db.model");

const getCategory = async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM category";
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

const postCategory = async (req, res) => {
  try {
    const data = req.body;
    const sqlQuery = "INSERT INTO category SET ?";
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

const patchCategory = async (req, res) => {
  try {
    const data = [req.body, req.params.c_id];
    const sqlQuery = "UPDATE category SET ? WHERE c_id = ?";
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

const deleteCategory = async (req, res) => {
  try {
    const data = req.params.c_id;
    const sqlQuery = "DELETE FROM category WHERE c_id = ?";
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

module.exports = { getCategory, postCategory, patchCategory, deleteCategory };
