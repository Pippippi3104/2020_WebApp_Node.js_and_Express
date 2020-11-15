var express = require("express");
var app02 = express();

app02.set("view engine", "ejs");

app02.use("public", express.static(__dirname + "/public"));

app02.use("/", require("./routes/index.js"));

app02.listen(3000);



