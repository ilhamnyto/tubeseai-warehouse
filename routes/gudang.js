const express = require("express");
const db = require("../db");
const gudangRouter = express.Router();

gudangRouter
  .route("/")
  .get((req, res) => {
    db.query(`SELECT * FROM gudang`, (err, result) => {
      if (err) {
        console.error("There are some error.", err);
        res.status(500).json({ message: "An error occured." });
      }
      res.json(result.rows);
    });
  })
  .post((req, res) => {
    db.query(
      `INSERT INTO gudang (id, name, location, supervisor, capacity, biaya_sewa, biaya_perawatan) VALUES ('${req.body.id}','${req.body.name}','${req.body.location}','${req.body.supervisor}', '${req.body.capacity}', '${req.body.biaya_sewa}', '${req.body.biaya_perawatan}')`,
      (err, result) => {
        if (err) {
          console.error("Theres some error. ", err);
          res
            .status(500)
            .json({ message: "Data yang dimasukkan tidak sesuai." });
        }
        res.json({ message: "gudang inserted sucessfully." });
      }
    );
  })
  .put((req, res) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res) => {
    db.query("TRUNCATE gudang", (err, result) => {
      if (err) {
        console.error("There is some error", err);
        res.status(500).json({ message: "An error occured." });
      }
      res.json({ message: "all gudang are deleted sucessfully." });
    });
  });

gudangRouter
  .route("/:idGudang")
  .get((req, res) => {
    db.query(
      `SELECT * FROM gudang WHERE id = '${req.params.idGudang}'`,
      (err, result) => {
        if (err) {
          console.error("There are some error.", err);
          res.status(500).json({ message: "An error occured." });
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
      `UPDATE gudang SET name = '${req.body.name}', location = '${req.body.location}', supervisor = '${req.body.supervisor}', capacity = '${req.body.capacity}', biaya_sewa = '${req.body.biaya_sewa}', biaya_perawatan = '${req.body.biaya_perawatan}' WHERE id = '${req.params.idGudang}'`,
      (err, result) => {
        if (err) {
          console.error("There are some error", err);

          res
            .status(500)
            .json({ message: "Data yang dimasukkan tidak sesuai" });
        }
        res.json({ message: "Gudang updated successfully" });
      }
    );
  })
  .delete((req, res) => {
    db.query(
      `DELETE FROM gudang WHERE id = '${req.params.idGudang}'`,
      (err, result) => {
        if (err) {
          console.log(`There are some error`, err);
          res
            .status(500)
            .json({ message: "Data yang dimasukkan tidak sesuai." });
        }
        res.json({
          message: `gudang with id: ${req.params.idBarang} has been deleted sucessfully.`,
        });
      }
    );
  });

module.exports = gudangRouter;
