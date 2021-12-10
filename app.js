const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  /* res.send("Hello world!"); */
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api/ropa/", (req, res) => {
  console.log("Llegaste bien jaja");
  res.sendFile(path.join(__dirname + "/productos.json"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor running on port: ", process.env.PORT || 3000);
});
