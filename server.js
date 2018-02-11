const express = require("express");
const path = require("path");
const livereload = require('livereload');

const httpPort = 3031;
const staticPath = path.join(__dirname, "public");

startServer();

console.log("Creating livereload server.");
var lreload = livereload.createServer();
lreload.watch(staticPath);

console.log(`Started at http://localhost:${httpPort}`);



function startServer() {
    console.log("Creating express server.");
    var app = express();

    console.log(`Hosting from ${staticPath}...`);
    app.use(express.static(staticPath));
    
    
    // Start up express server
    console.log(`Starting on port ${httpPort}...`);
    app.listen(httpPort);
}