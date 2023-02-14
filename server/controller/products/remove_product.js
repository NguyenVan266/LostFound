const products_md = require("../../model/products")

module.exports.remove_product = async(req, res) => {
    try {
        const product = await products_md.findByIdAndRemove({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm sản phẩm, không thể xóa!"
        })

    }
}