


const ValidProducts = (req, res, next) => {
    let { title, price, category, img } = req.body
    if (title && price && category && img) {
        next()
    }
    else {
        res.status(400).send("InComplete ProductsData")
    }
}

module.exports = ValidProducts