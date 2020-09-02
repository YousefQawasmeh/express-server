const dbConnection = require("../dbConnection");

const getUniversities = () => {
  return dbConnection
    .query("SELECT name FROM university ", [])
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

module.exports = getUniversities;
