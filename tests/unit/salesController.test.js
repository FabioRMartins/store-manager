const { expect } = require("chai");
const { describe } = require("mocha");
const Sinon = require("sinon");
const salesController = require("../../controllers/salesControlles");
const salesService = require("../../services/salesService");

describe("GET SALES", () => {
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
      Sinon.stub(salesService, "getSale").resolves(resultExecute);

      await salesController.getSale(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });
});
