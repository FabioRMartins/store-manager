const productService = require('../services/productService');

const getAllProducts = async (_req, res) => {
  const result = await productService.getAllProducts();
  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(result);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;

  const resultId = await productService.getProductsById(id);
  if (!resultId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(resultId);
};

const addNewProduct = async (req, res) => {
  const { name } = req.body;
  const resultName = await productService.addNewProduct(name);

  return res.status(201).json(resultName);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  await productService.updateProduct(id, name);
  const resultUpdate = await productService.getProductsById(id);
  if (!resultUpdate) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(resultUpdate);
};

module.exports = {
  getAllProducts,
  getProductsById,
  addNewProduct,
  updateProduct,
};
