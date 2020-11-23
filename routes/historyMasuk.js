const express = require("express");
const db = require("../db");
const historyMasukRouter = express.Router();

historyMasukRouter
  .route("/")
  .get((req, res) => {
    db.query("SELECT * FROM history_masuk", (err, result) => {
      if (err) {
        console.error("There are some error.", err);
      }
      res.json(result.rows);
    });
  })
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

historyMasukRouter
  .route("/:idHistory")
  .get((req, res) => {
    db.query(
      `SELECT * FROM history_masuk WHERE id = '${req.params.idHistory}'`,
      (err, result) => {
        if (err) {
          console.error("There are some error.", err);
        }
        res.json(result.rows);
      }
    );
  })
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = historyMasukRouter;
