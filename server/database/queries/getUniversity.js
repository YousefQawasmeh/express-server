const dbConnection = require("../dbConnection");

const getUniversity = (universityName) => {
  return dbConnection
    .query("SELECT * FROM university where name=$1", [universityName])
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

module.exports = getUniversity;
