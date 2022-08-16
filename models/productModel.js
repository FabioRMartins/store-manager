const connection = require('./connectionModel');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products ORDER BY id');
  if (result.length === 0) {
    return [];
  }
  return result;
};

const getProductsById = async (id) => {
  const [resultId] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [id]);
  return resultId[0];
};

const addNewProduct = async (name) => {
  const [resultName] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES(?)',
    [name],
  );
  return { id: resultName.insertId, name };
};

module.exports = { getAllProducts, getProductsById, addNewProduct };
