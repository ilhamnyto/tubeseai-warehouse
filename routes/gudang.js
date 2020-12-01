const express = require("express");
const db = require("../db");
const gudangRouter = express.Router();

gudangRouter
  .route("/")
  .get((req, res, next) => {
    db.query(`SELECT * FROM gudang`, (err, result) => {
      if (err) {
        const error = new Error(err);
        next(error);
      } else {
        res.json(result.rows);
      }
    });
  })
  .post((req, res, next) => {
    db.query(
      `INSERT INTO gudang (id, name, location, supervisor, capacity, biaya_sewa, biaya_perawatan) VALUES ('${req.body.id}','${req.body.name}','${req.body.location}','${req.body.supervisor}', '${req.body.capacity}', '${req.body.biaya_sewa}', '${req.body.biaya_perawatan}')`,
      (err, result, next) => {
        if (err) {
          const error = new Error(err);
          next(error);
        } else {
          res.json({ message: "gudang inserted sucessfully." });
        }
      }
    );
  })
  .put((req, res, next) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res, next) => {
    db.query("TRUNCATE gudang", (err, result) => {
      if (err) {
        const error = new Error(err);
        next(error);
      } else {
        res.json({ message: "all gudang are deleted sucessfully." });
      }
    });
  });

gudangRouter
  .route("/:idGudang")
  .get((req, res, next) => {
    db.query(
      `SELECT * FROM gudang WHERE id = '${req.params.idGudang}'`,
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
  .post((req, res, next) => {
    res.status(405).json({ message: "POST method is not allowed." });
  })
  .put((req, res, next) => {
    db.query(
      `UPDATE gudang SET name = '${req.body.name}', location = '${req.body.location}', supervisor = '${req.body.supervisor}', capacity = '${req.body.capacity}', biaya_sewa = '${req.body.biaya_sewa}', biaya_perawatan = '${req.body.biaya_perawatan}' WHERE id = '${req.params.idGudang}'`,
      (err, result) => {
        if (err) {
          const error = new Error(err);
          next(error);
        } else {
          res.json({ message: "Gudang updated successfully" });
        }
      }
    );
  })
  .delete((req, res, next) => {
    db.query(
      `DELETE FROM gudang WHERE id = '${req.params.idGudang}'`,
      (err, result) => {
        if (err) {
          const error = new Error(err);
          next(error);
        } else {
          res.json({
            message: `gudang with id: ${req.params.idGudang} has been deleted sucessfully.`,
          });
        }
      }
    );
  });

module.exports = gudangRouter;
