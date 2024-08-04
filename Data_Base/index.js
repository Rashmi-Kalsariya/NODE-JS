

const dbconnect = require("./db");
const express = require("express");

const app = express();

app.use(express.json())

const User = require("./User.schema");

app.get("/", async (res, req) => {
    let data = await User.find();
    res.send(data);
})

// Post For Creates Data

app.post("/", async (res, req) => {
    let data = await User.create(req.body);
    res.send(data);
})


app.listen(8090, () => {
    console.log("Listening on port 8090");
    dbconnect();
})