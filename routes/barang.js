const express = require("express");
const barangRouter = express.Router();
const db = require("../db");

barangRouter
  .route("/")
  .get((req, res) => {
    db.query("SELECT * from barang", function (err, result) {
      if (err) {
        const error = new Error(err);
        next(error);
      } else {
        res.json(result.rows);
      }
    });
  })
  .post((req, res) => {
    db.query(
      `INSERT INTO barang (id, name, stock, gudang) VALUES ('${req.body.id}','${req.body.name}','${req.body.stock}','${req.body.gudang}')`,
      (err, result) => {
        if (err) {
          const error = new Error(err);
          next(error);
        } else {
          res.json({ message: "barang inserted sucessfully." });
        }
      }
    );
  })
  .put((req, res) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res) => {
    res.status(405).json({ message: "DELETE method is not allowed." });
  });

barangRouter
  .route("/restock")
  .get((req, res) => {
    db.query(`SELECT * from barang WHERE stock < 100`, function (err, result) {
      if (err) {
        const error = new Error(err);
        next(error);
      } else {
        res.json(result.rows);
      }
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
          const error = new Error(err);
          next(error);
        } else {
          res.json(result.rows);
        }
      }
    );
  })
  .post((req, res) => {
    res.status(405).json({ message: "POST method is not allowed." });
  })
  .put((req, res) => {
    db.query(
      `UPDATE barang SET name = '${req.body.name}', stock = ${req.body.stock}, gudang = '${req.body.gudang}' WHERE id = '${req.params.idBarang}'`,
      (err, result) => {
        if (err) {
          const error = new Error(err);
          next(error);
        } else {
          res.json({ message: "barang updated successfully." });
        }
      }
    );
  })
  .delete((req, res) => {
    db.query(
      `DELETE FROM barang WHERE id = '${req.params.idBarang}'`,
      (err, result) => {
        if (err) {
          const error = new Error(err);
          next(error);
        } else {
          res.json({
            message: `barang with id: ${req.params.idBarang} has been deleted sucessfully.`,
          });
        }
      }
    );
  });

module.exports = barangRouter;
