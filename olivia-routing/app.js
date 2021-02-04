var express = require("express");
var app = express();

app.get("/olivia", (req, res) => {
    res.send("Welcome to Olivia's homepage!");
})

app.get("/users/:userid", function (req, res) {
    var userId = parseInt(req.params.userid, 10);
    res.send("You are in page userId: " + userId);
});

app.get("/search", function (req, res) {
    // req.query.q == "javascript-themed burrito"
    // ...
});

app.use((req, res) => {
    res.status(404).send("Page not found!");
})

app.listen(3000, () => {
    console.log("App is listening");
});