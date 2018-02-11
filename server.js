const express = require("express");
const path = require("path");
const scanner = require("portscanner");

// Ports to try and use
const portMin = 3030;
const portMax = 3040;

// Location of files
const staticPath = path.join(__dirname, "public");

scanner.findAPortNotInUse(portMin, portMax)
    .then(port => startServer(port))
    .catch(_ => console.log("No ports available to start HTTP server."));

// Implementation of server
function startServer(port) {
    console.log("Creating express server.");
    var app = express();

    console.log(`Hosting from ${staticPath}...`);
    app.use(express.static(staticPath));
    
    // Start up express server
    console.log(`Starting on port ${port}...`);
    app.listen(port);

    console.log(`Started at http://localhost:${port}`);
}