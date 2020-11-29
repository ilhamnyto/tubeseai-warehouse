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
  .post((req, res) => {
    db.query(
      `INSERT INTO history_masuk (id, id_barang, jumlah, vendor, date, gudang) VALUES ('${req.body.id}','${req.body.id_barang}','${req.body.jumlah}','${req.body.vendor}', '${req.body.date}', '${req.body.gudang}')`,
      (err, result) => {
        if (err) {
          console.error("Theres some error. ", err);
          res
            .status(500)
            .json({ message: "Data yang dimasukkan tidak sesuai." });
        }
        res.json({ message: "history masuk inserted sucessfully." });
      }
    );
  })
  .put((req, res) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res) => {
    res.status(405).json({ message: "DELETE method is not allowed." });
  });

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
  .post((req, res) => {
    res.status(405).json({ message: "POST method is not allowed." });
  })
  .put((req, res) => {
    db.query(
      `UPDATE history_masuk SET id_barang = '${req.body.id_barang}', jumlah = ${req.body.jumlah}, vendor = '${req.body.vendor}', date = '${req.body.date}', gudang = '${req.body.gudang}' WHERE id = '${req.params.idHistory}'`,
      (err, result) => {
        if (err) {
          console.error("Theres some error. ", err);
          res
            .status(500)
            .json({ message: "Data yang dimasukkan tidak sesuai." });
        }
        res.json({ message: "history masuk updated sucessfully." });
      }
    );
  })
  .delete((req, res) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  });

module.exports = historyMasukRouter;
