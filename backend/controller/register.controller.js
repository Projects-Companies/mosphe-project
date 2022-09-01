const { con } = require("../model/db.model");

const getRegister = async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM register";
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

const postRegister = async (req, res) => {
  try {
    const data = req.body;
    const sqlQuery = "INSERT INTO register SET ?";
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

const postLogin = async (req, res) => {
  try {
    const data = req.body;
    const sqlQuery = "SELECT * FROM register email = ? AND password = ?";
    await con.query(sqlQuery, data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage);
      }

      // if (result) {
      return res.send({ Status: 200, Response: result });
      // } else {
      //   return res.send({ Message: "Wrong Password Combination" });
      // }
    });
  } catch (error) {
    console.log(error.sqlMessage);
  }
};

module.exports = { getRegister, postRegister, postLogin };
