const productModel = require('../models/productModel');

const getAllProducts = async () => productModel.getAllProducts();
const getProductsById = async () => productModel.getProductsById();

module.exports = { getAllProducts, getProductsById };