const mysql = require("mysql");

const con = mysql.createConnection({
  database: "mosphe",
  host: "localhost",
  password: "",
  user: "root",
});

con.connect((err) => {
  if (err) {
    console.log(err.sqlMessage);
  }
  console.log("Database model is now Connected");
});

module.exports = { con };
