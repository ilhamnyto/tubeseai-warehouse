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

router.get("/editgudang/:id", (req, res, next) => {
  res.render("./update/updategudang.ejs", { param: req.params.id });
});
router.get("/editbarang/:id", (req, res, next) => {
  res.render("./update/updatebarang.ejs", { param: req.params.id });
});
router.get("/editbarangmasuk/:id", (req, res, next) => {
  res.render("./update/updatebarangmasuk.ejs", { param: req.params.id });
});
router.get("/editbarangkeluar/:id", (req, res, next) => {
  res.render("./update/updatebarangkeluar.ejs", { param: req.params.id });
});

router.get("/restock", (req, res, next) => {
  res.render("./divisilain/restock");
});
router.get("/goods-receipt", (req, res, next) => {
  res.render("./divisilain/goodreceipt");
});
router.get("/restock/:id", (req, res, next) => {
  res.render("./divisilain/restockpage", { param: req.params.id });
});
module.exports = router;
