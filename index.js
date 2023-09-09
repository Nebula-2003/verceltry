// / Add Express
const express = require("express");

// Initialize Express
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
let image = "./images/1.png";
// Create GET request
app.get("/", (req, res) => {
    try {
        res.render("index", { image });
    } catch (error) {
        console.log("error:", error);
    }
});

// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});
