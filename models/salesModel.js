const connection = require('./connectionModel');

const getSale = async () => {
  const [result] = await connection.execute(`
   SELECT sales.id AS saleId,
    sales.date, sales_products.product_id AS productId,
    sales_products.quantity FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sales_products
    WHERE sales.id = sales_products.sale_id
    ORDER BY saleID, productId;`);

return result;
};

const getSaleById = async (id) => {
  const [resultId] = await connection.execute(`
  SELECT sales.date, sales_products.product_id AS productId, sales_products.quantity
   FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sales_products
     WHERE sales_products.sale_id = sales.id AND sales_products.sale_id = ?;`, [id]);
  return resultId;
};

module.exports = { getSale, getSaleById };