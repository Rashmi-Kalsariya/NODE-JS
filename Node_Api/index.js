const express = require('express')
const app = express();


app.get("/", (req, res) => {
    res.send("WelCome To The First Node API!!");
});

app.get("/api", (req, res) => {
    res.send("Welcome To API!!")
});


//Port

app.listen(8090, () => {
    console.log("Starting Node...")
})