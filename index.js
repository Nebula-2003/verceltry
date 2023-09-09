// / Add Express
const express = require("express");
const path = require("path");

// Initialize Express
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
// Create GET request
app.get("/", (req, res) => {
    try {
        let image = "./images/1.png";
        res.render("index", { image });
    } catch (error) {
        console.log("error:", error);
    }
});

// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});
