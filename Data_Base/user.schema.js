const mongoose= require("mongoose");

const Userschema = new mongoose.Schema({

    Username : String,
    number : Number,
    email : String,
    password : String
})


//MODEL//

let User = mongoose.model("User",Userschema)

module.exports = User;