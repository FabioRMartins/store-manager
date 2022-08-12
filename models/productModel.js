const connection = require('./connectionModel');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products ORDER BY id');
  return result;
};

const getProductsById = async (id) => {
  const [resultId] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [id]);
  return resultId[0];
};

module.exports = { getAllProducts, getProductsById };
