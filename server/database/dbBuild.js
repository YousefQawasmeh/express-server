const fs = require("fs");
const dbConnection = require("./dbConnection");

const createDataBase = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString();
const initDate = fs.readFileSync(`${__dirname}/initValue.sql`).toString();

dbConnection
  .query(createDataBase)
  .then((res) => {
    console.log("database is created successfully");
    dbConnection
      .query(initDate)
      .then((res2) => {
        console.log("data inserted successfully");
      })
      .catch((err) => console.log(err, "insert data is failed"));
  })
  .catch((err) => console.log(err, "create database is failed"));
