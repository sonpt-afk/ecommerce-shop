const {addShoeService} = require('../services/productService')

//them san pham moi
const addProduct = async (req, res) => {
  const {name,image,countInStock} = req.body;
  const data = await addShoeService(name,image,countInStock)
  return res.status(200).json(data)

}

module.exports = {
  addProduct,

}

