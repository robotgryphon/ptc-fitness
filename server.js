const express = require("express");
const path = require("path");

const httpPort = 3031;


var app = express();

const staticPath = path.join(__dirname, "public");

app.use(express.static(staticPath));
app.use(express.static(path.join(staticPath, "template")));

app.listen(httpPort);