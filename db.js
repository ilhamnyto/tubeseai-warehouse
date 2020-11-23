const pg = require("pg");

var conString = process.env.DB_URL;
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
});

module.exports = client;
