import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../index";
import { SnakeInfoInt } from "../../interfaces/SnakeInfoInt";

chai.use(chaiHttp);

const expectedBody = {
  apiversion: "1",
  author: "nhcarrigan",
  color: "#451c70",
  head: "pixel",
  tail: "pixel",
};

suite("'/' Route", () => {
  test("route should respond 200", async () => {
    const { status } = await chai.request(app).get("/");
    assert.equal(status, 200, "did not return 200-OK");
  });

  test("route should send back correct config", async () => {
    const response = await chai.request(app).get("/");
    const body: SnakeInfoInt = response.body;
    assert.deepEqual(
      body,
      expectedBody,
      "does not send back correct information"
    );
  });
});
