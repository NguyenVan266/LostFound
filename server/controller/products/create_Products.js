const products_md = require("../../model/products");

module.exports.create_product = async (req, res) => {
  try {
    const product = await new products_md(req.body).save();
    res.json(product);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
