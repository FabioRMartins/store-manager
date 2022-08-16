const { expect } = require("chai");
const { describe } = require("mocha");
const Sinon = require("sinon");
const productController = require('../../controllers/productController');
const productService = require("../../services/productService");

describe("GET ALL PRODUCTS", () => {
  describe("Caso ok", () => {
    afterEach(() => {
      Sinon.restore();
    });
    it("retorna array", async function () {
      const request = {};
      const response = {};
      
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(productService, "getAllProducts").resolves(resultExecute);

    await productController.getAllProducts(request, response );
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });
});
