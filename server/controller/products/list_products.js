const products_md = require("../../model/products")

module.exports.list_products = async(req, res) => {
    const product = await products_md.find()
    res.json(product)
}