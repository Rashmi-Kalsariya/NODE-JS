const mongoose=require("mongoose");

const ProductSchema = new mongoose.Schema({

    title : String,
    price : Number,
    category : String,
    img : String
})


let Product = mongoose.model("Product",ProductSchema)

module.exports = Product;