const mongoose = require("mongoose");

const dbconnect = async()=>{

    await mongoose.connect("mongodb://localhost:27017/node");

    console.log("connected to db");
}


module.exports = dbconnect