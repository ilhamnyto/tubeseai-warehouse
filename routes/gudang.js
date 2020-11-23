const express = require("express");
const db = require("../db");
const gudangRouter = express.Router();

gudangRouter
  .route("/")
  .get((req, res) => {
    db.query(`SELECT * FROM gudang`, (err, result) => {
      if (err) {
        console.error("There are some error.", err);
      }
      res.json(result.rows);
    });
  })
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

gudangRouter
  .route("/:idGudang")
  .get((req, res) => {
    db.query(`SELECT * FROM gudang WHERE id = ${req.params.idGudang}`, (err, result) => {
      if (err) {
        console.error("There are some error.", err);
      }
      res.json(result.rows);
    });
  })
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = gudangRouter;
