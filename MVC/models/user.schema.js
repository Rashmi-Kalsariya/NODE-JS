const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema({

    Username : String,
    number : Number,
    email : String,
    password : String
})


let User = mongoose.model("User",UserSchema)

module.exports = User;