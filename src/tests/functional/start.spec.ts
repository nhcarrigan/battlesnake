import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../index";

chai.use(chaiHttp);

const requestBody = {
  game: "test",
  turn: 1000,
};

suite("'/start' route", () => {
  test("route should respond 200", async () => {
    const { status } = await chai.request(app).post("/start").send(requestBody);
    assert.equal(status, 200, "does not respond with 200-OK");
  });
});
