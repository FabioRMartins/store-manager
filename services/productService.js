const productModel = require('../models/productModel');

const getAllProducts = async () => {
  const result = await productModel.getAllProducts();
  if (!result) {
    return [];
  }
  return result;
};

const getProductsById = async (id) => {
  const resultId = await productModel.getProductsById(id);
  if (!resultId) {
    return null;
  }
  return resultId;
};

const addNewProduct = async (name) => productModel.addNewProduct(name);

const updateProduct = async (id, name) => {
  const resultUpdate = await productModel.updateProduct(id, name);
  if (!resultUpdate.affectedRows) {
    return null;
  }
  return resultUpdate;
};

const removeProduct = async (id) => {
  const resultRemove = await productModel.removeProduct(id);
  if (!id) {
    return null;
}
  return resultRemove;
};

module.exports = {
  getAllProducts,
  getProductsById,
  addNewProduct,
  updateProduct,
  removeProduct,
};
