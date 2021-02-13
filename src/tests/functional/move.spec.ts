import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import { app } from "../../index";
import { BattleSnakeInt } from "../../interfaces/BattleSnakeInt";
import { BoardInt } from "../../interfaces/BoardInt";
import { RequestBodyInt } from "../../interfaces/RequestBodyInt";

chai.use(chaiHttp);

const mockSnake: BattleSnakeInt = {
  id: "mockEnemy",
  name: "Eddie Jaoude",
  health: 10,
  body: [],
  latency: "1ms",
  head: { x: 0, y: 0 },
  length: 40,
  shout: "Community first, code second!",
  squad: "EddieHub",
};

const mockMe: BattleSnakeInt = {
  id: "isMe!",
  name: "nhcarrigan",
  health: 10,
  body: [],
  latency: "1ms",
  head: { x: 5, y: 5 },
  length: 2,
  shout: "open code → insert bugs",
  squad: "EddieHub",
};

const mockBoard: BoardInt = {
  height: 11,
  width: 11,
  food: [],
  snakes: [mockSnake],
  hazards: [],
};

const mockRequest: RequestBodyInt = {
  turn: 1,
  board: mockBoard,
  game: { id: "It's fake", timeout: 500 },
  you: mockMe,
};

const missingYouRequest: RequestBodyInt = {
  turn: 1,
  board: mockBoard,
  game: { id: "broken", timeout: 0 },
};

const missingBoardRequest: RequestBodyInt = {
  turn: 1,
  game: { id: "broken", timeout: 0 },
  you: mockMe,
};

suite("'/move' route", () => {
  test("route should respond 200", async () => {
    const { status } = await chai.request(app).post("/move").send(mockRequest);
    assert.equal(status, 200, "does not respond with 200-OK");
  });

  test("route should send error on missing board", async () => {
    const { status, body } = await chai
      .request(app)
      .post("/move")
      .send(missingBoardRequest);
    assert.equal(status, 400, "does not respond with 400-Bad Request");
    assert.property(body, "error", "does not send error object");
    assert.equal(
      body.error,
      "Game board not found.",
      "does not send correct error message"
    );
  });

  test("route should send error on missing self", async () => {
    const { status, body } = await chai
      .request(app)
      .post("/move")
      .send(missingYouRequest);
    assert.equal(status, 400, "does not respond with 400-Bad Request");
    assert.property(body, "error", "does not send error object");
    assert.equal(
      body.error,
      "This snake not found.",
      "does not send correct error message"
    );
  });

  test("route should send back a move", async () => {
    const { body } = await chai.request(app).post("/move").send(mockRequest);
    assert.property(body, "move", "does not send back move property");
    assert.isString(body.move, "move is not a string");
  });
});
