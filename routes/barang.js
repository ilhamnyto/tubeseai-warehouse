const express = require("express");
const barangRouter = express.Router();
const db = require("../db");

barangRouter
  .route("/")
  .get((req, res, next) => {
    db.query("SELECT * from barang", function (err, result) {
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
  .put((req, res, next) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res, next) => {
    res.status(405).json({ message: "DELETE method is not allowed." });
  });

barangRouter
  .route("/restock")
  .get((req, res, next) => {
    db.query(
      `SELECT barang.*, status.* FROM barang LEFT JOIN status ON barang.id=status.id_barang WHERE barang.stock < 100;`,
      function (err, result) {
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
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res, next) => {
    res.status(405).json({ message: "DELETE method is not allowed." });
  });

barangRouter
  .route("/status")
  .get((req, res, next) => {
    db.query(`SELECT * from status`, function (err, result) {
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
      `INSERT INTO status (trans_code, id_barang, status, jumlah) VALUES ('${req.body.trans_code}','${req.body.id_barang}','${req.body.status}', '${req.body.jumlah}')`,
      (err, result) => {
        if (err) {
          const error = new Error(err);
          next(error);
        } else {
          res.json({ message: "Transaction code saved successfully." });
        }
      }
    );
  })
  .put((req, res, next) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res, next) => {
    res.status(405).json({ message: "DELETE method is not allowed." });
  });

barangRouter
  .route("/status/:id")
  .get((req, res, next) => {
    res.status(405).json({ message: "GET method is not allowed." });
  })
  .post((req, res, next) => {
    res.status(405).json({ message: "POST method is not allowed." });
  })
  .put((req, res, next) => {
    res.status(405).json({ message: "PUT method is not allowed." });
  })
  .delete((req, res, next) => {
    db.query(
      `DELETE FROM status WHERE trans_code = '${req.params.id}'`,
      (err, result) => {
        if (err) {
          const error = new Error(err);
          next(error);
        } else {
          res.json({
            message: `barang with transaction code: ${req.params.id} has been deleted sucessfully.`,
          });
        }
      }
    );
  });

barangRouter
  .route("/:idBarang")
  .get((req, res, next) => {
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
  .post((req, res, next) => {
    res.status(405).json({ message: "POST method is not allowed." });
  })
  .put((req, res, next) => {
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
  .delete((req, res, next) => {
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
