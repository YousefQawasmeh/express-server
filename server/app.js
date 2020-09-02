const express = require("express");
const path = require("path");
const app = express();
const server = require("http");
const axios = require("axios");

const getUniversity = require("./database/queries/getUniversity");
const getUniversities = require("./database/queries/getUniversities");

app.get("/", (req, res) => {
  res.send("hello server");
});

app.get("/universities", (req, res) => {
  getUniversities()
    .then((universities) => {
      res.send(universities.map(({ name }) => name));
    })
    .catch((err) => {
      console.log(err);
      res.send("err");
    });
});

app.get("/university/:name", (req, res) => {
  console.log(req.params);
  const universityName = req.params.name.replace(/-/g, " ");
  getUniversity(universityName)
    .then((university) => {
      res.send(university);
    })
    .catch((err) => {
      console.log(err);
      res.send("err");
    });
});

module.exports = app;
