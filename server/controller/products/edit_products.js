const products_md = require("../../model/products")


module.exports.update_product = async(req, res) => {
    try {
        const product = await products_md.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm, không thể cập nhật lại!"
        })

    }
}