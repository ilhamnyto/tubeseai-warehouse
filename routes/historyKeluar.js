const express = require("express");
const db = require("../db");
const historyKeluarRouter = express.Router();

historyKeluarRouter
  .route("/")
  .get((req, res) => {
    db.query("SELECT * FROM history_keluar", (err, result) => {
      if (err) {
        console.error("There are some error.", err);
      }
      res.json(result.rows);
    });
  })
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

historyKeluarRouter
  .route("/:idHistory")
  .get((req, res) => {
    db.query(
      `SELECT * FROM history_keluar WHERE id = '${req.params.idHistory}'`,
      (err, result) => {
        if (err) {
          console.error("There are some error.", err);
        }
        res.json(result);
      }
    );
  })
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = historyKeluarRouter;
