// / Add Express
const express = require("express");

// Initialize Express
const app = express();
app.set("view engine", "ejs");

// Create GET request
app.get("/", (req, res) => {
    res.render("index");
});

// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});
