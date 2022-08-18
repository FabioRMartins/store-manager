const salesModel = require('../models/salesModel');

const getSale = async () => {
  const result = await salesModel.getSale();
  if (!result) {
    return null;
  }
  return result;
};

const getSaleById = async (id) => {
  const resultId = await salesModel.getSaleById(id);
  if (!resultId || resultId === 0) {
    return null;
  }
  return resultId;
};

module.exports = { getSale, getSaleById };
