const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const productModel = require('../../models/productModel');
const productService = require('../../services/productService');

describe('GET ALL PRODUCTS', () => {
  describe("Caso ok", () => {
    afterEach(() => {
      Sinon.restore();
    })
    it('retorna array', async function () {
      const resultExecute = []
      Sinon.stub(productModel, 'getAllProducts').resolves(resultExecute);

      const result = await productService.getAllProducts();
      expect(result).to.be.an('array');
    });
    it('retorna array vazio', async function () {
       const resultExecute = [];
       Sinon.stub(productModel, 'getAllProducts').resolves(resultExecute);

       const result = await productService.getAllProducts();
       expect(result).to.be.empty
    });
    it('Retorna um array cheio', async () => {
      const resultExecute = [{ id: 1, name: 'test' }]
      Sinon.stub(productModel, 'getAllProducts').resolves(resultExecute);
      const result = await productService.getAllProducts();
      expect(result).to.be.not.empty;
    })
    it('Retorna array com objetos', async () => {
      const resultExecute = { id: 1, name: 'test' };
      Sinon.stub(productModel, 'getAllProducts').resolves(resultExecute);
      const result = await productService.getAllProducts();
      expect(result).to.be.an('object');
      expect(result).to.all.keys('name', 'id');
    })
  });
});
