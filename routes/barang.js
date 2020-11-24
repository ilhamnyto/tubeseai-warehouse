const express = require("express");
const barangRouter = express.Router();
const db = require("../db");

barangRouter
  .route("/")
  .get((req, res) => {
    db.query("SELECT * from barang", function (err, result) {
      if (err) {
        return console.error("error running query", err);
      }
      res.json(result.rows);
    });
  })
  .post((req, res) => {
    db.query(
      `INSERT INTO barang (id, name, stock, gudang) VALUES ('${req.body.id}','${req.body.name}','${req.body.stock}','${req.body.gudang}')`,
      (err, result) => {
        if (err) {
          console.error("Theres some error. ", err);
        }
        res.json({ message: "barang inserted sucessfully." });
      }
    );
  })
  .put((req, res) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res) => {
    db.query("TRUNCATE barang", (err, result) => {
      if (err) {
        console.error("There is some error", err);
      }
      res.json({ message: "all barang are deleted sucessfully." });
    });
  });

barangRouter
  .route("/restock")
  .get((req, res) => {
    console.log(",masuk");
    db.query(`SELECT * from barang WHERE stock < 100`, function (err, result) {
      if (err) {
        return console.error("error running query", err);
      }
      res.json(result.rows);
    });
  })
  .post((req, res) => {
    res.status(405).json({ message: "POST method is not allowed." });
  })
  .put((req, res) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res) => {
    res.status(405).json({ message: "DELETE method is not allowed." });
  });

barangRouter
  .route("/:idBarang")
  .get((req, res) => {
    db.query(
      `SELECT * FROM barang WHERE id = '${req.params.idBarang}'`,
      (err, result) => {
        if (err) {
          console.error("There are some error", err);
        }
        res.json(result.rows);
      }
    );
  })
  .post((req, res) => {
    res.status(405).json({ message: "POST method is not allowed." });
  })
  .put((req, res) => {
    res.json({ message: "under construction" });
  })
  .delete((req, res) => {
    db.query(
      `DELETE FROM barang WHERE id = '${req.params.idBarang}'`,
      (err, result) => {
        if (err) {
          console.log(`There are some error`, err);
        }
        res.json({
          message: `barang with id: ${req.params.idBarang} has been deleted sucessfully.`,
        });
      }
    );
  });

module.exports = barangRouter;
