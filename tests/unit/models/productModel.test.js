const { expect } = require('chai');
const { func } = require('joi');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connectionModel');
const { getConnection } = require('../../../models/connectionModel');
const productModel = require('../../../models/productModel');


describe('GET ALL PRODUCTS', () => {
  describe('Caso ok', () => {
    before(() => {
      const resultExecute = []
      Sinon.stub(connection, 'execute').resolves([resultExecute])
    })
    after(() => {
      connection.execute.restore();
      Sinon.restore()
    })
    it('retorna array', async function () {
      const result = await productModel.getAllProducts();
      expect(result).to.be.an('array');
    })
    it("retorna array vazio", async function () {
      const result = await productModel.getAllProducts();
      expect(result).to.be.empty;
    });
  })
})