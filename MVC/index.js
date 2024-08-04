const express = require("express");
const userRouter = require("./routes/user.routes");
const dbconnect = require("./config/db");
const productRouter = require("./routes/product.route");

const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("working")
})

app.use("/user", userRouter)
app.use("/Products", productRouter)

app.listen(8090, () => {
    console.log("Listening on port 8090");
    dbconnect()
})