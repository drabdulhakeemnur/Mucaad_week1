const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
const app = express();
app.use(express.json());
app.use(express.static(`{__dirname}/public`));
app.set("views", "public/views");
app.set("view engine", "ejs");

const PHOTOS = JSON.parse(fs.readFileSync(`${__dirname}/./data/data.json`));
const photos = JSON.stringify(PHOTOS);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/photos", (req, res) => {
  res.status(200).json({
    data: { photos },
  });
});

const port = process.env.PORT || 3030;

app.listen(port, console.log(`server Running on ${port}`));
