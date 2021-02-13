import { assert } from "chai";
import { BattleSnakeInt } from "../../interfaces/BattleSnakeInt";
import { BoardInt } from "../../interfaces/BoardInt";
import { RequestBodyInt } from "../../interfaces/RequestBodyInt";
import { findOccupiedSquares } from "../../modules/findOccupiedSquares";

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

const cleanData = () => {
  mockMe.body = [];
  mockSnake.body = [];
  mockBoard.hazards = [];
};

suite("Obstacle Data Parsing", () => {
  suite("Find Obstacles", () => {
    test("Should see my body", (done) => {
      cleanData();
      mockMe.body = [{ x: 1, y: 1 }];
      const result = findOccupiedSquares(mockRequest);
      assert.isArray(result, "Did not return array");
      assert.equal(result.length, 1, "Did not see body");
      done();
    });

    test("Should see other snake", (done) => {
      cleanData();
      mockSnake.body = [
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ];
      const result = findOccupiedSquares(mockRequest);
      assert.isArray(result, "Did not return array");
      assert.equal(result.length, 2, "Did not see other snake");
      done();
    });

    test("Should see multiple snakes", (done) => {
      cleanData();
      mockSnake.body = [
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ];
      mockBoard.snakes = [mockSnake, mockSnake];
      const result = findOccupiedSquares(mockRequest);
      assert.isArray(result, "Did not return array");
      assert.equal(result.length, 4, "Did not see both snakes");
      mockBoard.snakes = [mockSnake];
      done();
    });

    test("Should see other hazard", (done) => {
      cleanData();
      mockBoard.hazards = [
        { x: 3, y: 4 },
        { x: 4, y: 4 },
        { x: 10, y: 10 },
      ];
      const result = findOccupiedSquares(mockRequest);
      assert.isArray(result, "Did not return array");
      assert.equal(result.length, 3, "Did not see other hazards");
      done();
    });

    test("Should collate ALL obstacles", (done) => {
      cleanData();
      mockMe.body = [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
      ];
      mockSnake.body = [{ x: 1, y: 1 }];
      mockBoard.hazards = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 10, y: 9 },
      ];
      const result = findOccupiedSquares(mockRequest);
      assert.equal(result.length, 6, "did not collect all obstacles");
      done();
    });

    test("Should return empty array for no obstacles", (done) => {
      cleanData();
      const result = findOccupiedSquares(mockRequest);
      assert.isArray(result, "did not return array");
      assert.equal(result.length, 0, "did not return length of 0");
      done();
    });
  });
});
