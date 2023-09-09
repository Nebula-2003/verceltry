const app = require("express")();
const { v4 } = require("uuid");

app.use(express.static("public"));

app.get("/api", (req, res) => {
    res.send("<h1>DONE</h1>")
});

app.get("/api/item/:slug", (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
});

module.exports = app;
