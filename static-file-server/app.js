var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var morgan = require("morgan");
var staticPath = path.join(__dirname, "static");
app.use(morgan("short"));
app.use(express.static(staticPath, (err) => {
    if (err) {
        console.log("File failed to send");
    } else {
        console.log("File sent!")
    }
}));

app.use(function (req, res) {
    res.status(404);
    res.send("File not found!");
});

app.listen(3000, function () {
    console.log("App started on port 3000");
}); 