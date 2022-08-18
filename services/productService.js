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

const addNewProduct = async (name) => {
  const resultName = await productModel.addNewProduct(name);
   if (!resultName) {
     return null;
   }
  return resultName;
};

module.exports = { getAllProducts, getProductsById, addNewProduct };