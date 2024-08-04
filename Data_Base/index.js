

const dbconnect = require("./db");
const express = require("express");


const app = express();

app.use(express.json())

const User = require("./User.schema");
const isValid = require("./middleware/middleware");


app.get("/", async (res, req) => {
    let data = await User.find();
    res.send(data);
})

// Post For Creates Data

app.post("/", isValid, async (res, req) => {
    let data = await User.create(req.body);
    res.send(User);
})


app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await User.findByIdAndUpdate(id, req.body);
    res.send(data);
});

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await User.findByIdAndDelete(id);
    res.send(data);
});




app.listen(8090, () => {
    console.log("Listening on port 8090");
    dbconnect();
})