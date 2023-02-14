const products_md = require("../../model/products")

module.exports.detail_product = async(req, res) => {
    try {
        const product = await products_md.findOne({ _id: req.params.id })
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm trên!"
        })

    }
}