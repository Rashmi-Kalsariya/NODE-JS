const { Router } = require("express")
const { getProducts, createProduct, UpdateProduct, DeleteProducts } = require("../controllers/product.controller")
const ValidProducts = require("../middleware/valid_ProductsData")



const productRouter = Router()

productRouter.get("/", getProducts)
productRouter.post("/", ValidProducts, createProduct)
productRouter.patch("/:id", UpdateProduct)
productRouter.delete("/:id", DeleteProducts)



module.exports = productRouter