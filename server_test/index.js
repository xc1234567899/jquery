const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());
// form
app.use(express.urlencoded());
// json
app.use(express.json());

app.post("/posttest", (req, res) => {
    res.json(req.body);
})

app.get("/gettest", (req, res) => {
    res.json(req.query);
})

app.get('/weather', (req, res) => {
    const data = fs.readFileSync("./weather.json")
    res.end(data)
})

app.get('/jsonp', (req, res) => {
    let callback = req.query.callback;
    res.end(callback + "('Hello JSONP')");
})

app.listen(3000, () => {
    console.log(`server is running at port:3000`);
})