if (process.env.NODE_ENV != "production") require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT;
const cors = require("cors");

const corsOptions = {
  origin: "https://pronabil.herokuapp.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const db = require("./db");
const barangRouter = require("./routes/barang");
const historyMasukRouter = require("./routes/historyMasuk");
const historyKeluarRouter = require("./routes/historyKeluar");
const gudangRouter = require("./routes/gudang");
const indexRouter = require("./routes/index");
const appRouter = require("./routes/appRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(cors(corsOptions));

app.use("/", indexRouter);
app.use("/barang", barangRouter);
app.use("/history_masuk", historyMasukRouter);
app.use("/history_keluar", historyKeluarRouter);
app.use("/gudang", gudangRouter);
app.use("/app", appRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Error: Not Found" });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
