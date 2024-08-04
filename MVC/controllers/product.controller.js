const Product = require("../models/product.schema")

const createProduct = async (req, res) => {
    let data = await Product.create(req.body)
    res.send(data)
}

const getProducts = async (req, res) => {
    let data = await Product.find()
    res.send(data)
}

const UpdateProduct = async (req, res) => {
    let { id } = req.params
    let data = await Product.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const DeleteProducts = async (req, res) => {

    let { id } = req.params
    let data = await Product.findByIdAndDelete(id)
    res.send(data)
}


module.exports = { createProduct, getProducts, UpdateProduct, DeleteProducts } 