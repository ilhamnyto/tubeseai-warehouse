const express = require("express");
const router = express.Router();

router.get("/home", (req, res, next) => {
  res.render("home");
});

router.get("/gudang", (req, res, next) => {
  res.render("gudang");
});

router.get("/barang", (req, res, next) => {
  res.render("barang");
});

router.get("/barangmasuk", (req, res, next) => {
  res.render("barangmasuk");
});

router.get("/barangkeluar", (req, res, next) => {
  res.render("barangkeluar");
});

module.exports = router;
