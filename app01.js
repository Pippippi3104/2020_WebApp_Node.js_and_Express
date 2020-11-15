var express = require("express");
var app01 = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World.");
    //same meaning top and below
 /*    res.writeHead(200);
    res.write("Hello World.");
    res.end(); */
});
app01.listen(3000);
//check this URL [http://localhost:3000/]



