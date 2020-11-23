if (process.env.NODE_ENV != "production") require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.PORT;

const db = require("./db");
const barangRouter = require("./routes/barang");
const historyMasukRouter = require("./routes/historyMasuk");
const historyKeluarRouter = require("./routes/historyKeluar");
const gudangRouter = require("./routes/gudang");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use("/barang", barangRouter);
app.use("/history_masuk", historyMasukRouter);
app.use("/history_keluar", historyKeluarRouter);
app.use("/gudang", gudangRouter);

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
