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

router.get("/addgudang", (req, res, next) => {
  res.render("./add/addgudang.ejs");
});
router.get("/addbarang", (req, res, next) => {
  res.render("./add/addbarang.ejs");
});
router.get("/addbarangmasuk", (req, res, next) => {
  res.render("./add/addbarangmasuk.ejs");
});
router.get("/addbarangkeluar", (req, res, next) => {
  res.render("./add/addbarangkeluar.ejs");
});

module.exports = router;
