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
  .post((req, res) => {
    db.query(
      `INSERT INTO history_keluar (id, id_barang, jumlah, destination, date, gudang) VALUES ('${req.body.id}','${req.body.id_barang}','${req.body.jumlah}','${req.body.destination}', '${req.body.date}', '${req.body.gudang}')`,
      (err, result) => {
        if (err) {
          console.error("Theres some error. ", err);
          res
            .status(500)
            .json({ message: "Data yang dimasukkan tidak sesuai." });
        }
        res.json({ message: "history_keluar inserted sucessfully." });
      }
    );
  })
  .put((req, res) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res) => {
    res.status(405).json({ message: "DELETE method is not allowed." });
  });

historyKeluarRouter
  .route("/:idHistory")
  .get((req, res) => {
    db.query(
      `SELECT * FROM history_keluar WHERE id = '${req.params.idHistory}'`,
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
      `UPDATE history_keluar SET id_barang = '${req.body.id_barang}', jumlah = '${req.body.jumlah}', destination = '${req.body.destination}', date = '${req.body.date}', gudang = '${req.body.gudang}' WHERE id = '${req.params.idHistory}'`,
      (err, result) => {
        if (err) {
          console.error("Theres some error. ", err);
          res
            .status(500)
            .json({ message: "Data yang dimasukkan tidak sesuai." });
        }
        res.json({ message: "history keluar updated successfully." });
      }
    );
  })
  .delete((req, res) => {
    res.status(405).json({ message: "DELETE method is not allowed." });
  });

module.exports = historyKeluarRouter;
