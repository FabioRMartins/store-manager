const salesService = require('../services/salesService');

const getSale = async (_req, res) => {
  const result = await salesService.getSale();
  if (!result) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(result);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const resultId = await salesService.getSaleById(id);
  if (resultId.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
    return res.status(200).json(resultId);
  };

module.exports = { getSale, getSaleById };