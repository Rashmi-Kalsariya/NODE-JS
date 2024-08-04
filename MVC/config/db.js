const mongoose = require("mongoose");

require("dotenv").config()
const url=process.env.DB_URL
const dbconnect = async()=>{
    await mongoose.connect(url)
    console.log("Connect to the DataBase");
}


module.exports = dbconnect