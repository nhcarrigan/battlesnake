import { assert } from "chai";
import { BattleSnakeInt } from "../../interfaces/BattleSnakeInt";
import { BoardInt } from "../../interfaces/BoardInt";
import { RequestBodyInt } from "../../interfaces/RequestBodyInt";
import { findOccupiedSquares } from "../../modules/findOccupiedSquares";
import { obsAtDown } from "../../modules/obstacles/obsAtDown";
import { obsAtLeft } from "../../modules/obstacles/obsAtLeft";
import { obsAtRight } from "../../modules/obstacles/obsAtRight";
import { obsAtUp } from "../../modules/obstacles/obsAtUp";

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

suite("Obstacle Detection", () => {
  suite("Obstacle at Up", () => {
    test("Snake at Up", (done) => {
      cleanData();
      mockSnake.body = [{ x: 5, y: 6 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtUp(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see snake at up");
      done();
    });

    test("Me at Up", (done) => {
      cleanData();
      mockMe.body = [{ x: 5, y: 6 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtUp(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see me at up");
      done();
    });

    test("Hazard at Up", (done) => {
      cleanData();
      mockBoard.hazards = [{ x: 5, y: 6 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtUp(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see hazard at up");
      done();
    });

    test("No obstacle at Up", (done) => {
      cleanData();
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtUp(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isFalse(result, "did not return false for no obstacles");
      done();
    });
  });

  suite("Obstacle at Down", () => {
    test("Snake at Down", (done) => {
      cleanData();
      mockSnake.body = [{ x: 5, y: 4 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtDown(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see snake at down");
      done();
    });

    test("Me at Down", (done) => {
      cleanData();
      mockMe.body = [{ x: 5, y: 4 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtDown(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see me at down");
      done();
    });

    test("Hazard at Down", (done) => {
      cleanData();
      mockBoard.hazards = [{ x: 5, y: 4 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtDown(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see hazard at down");
      done();
    });

    test("No obstacle at Down", (done) => {
      cleanData();
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtDown(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isFalse(result, "did not return false for no obstacles");
      done();
    });
  });

  suite("Obstacle at Left", () => {
    test("Snake at Left", (done) => {
      cleanData();
      mockSnake.body = [{ x: 4, y: 5 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtLeft(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see snake at left");
      done();
    });

    test("Me at Left", (done) => {
      cleanData();
      mockMe.body = [{ x: 4, y: 5 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtLeft(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see me at left");
      done();
    });

    test("Hazard at Left", (done) => {
      cleanData();
      mockBoard.hazards = [{ x: 4, y: 5 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtLeft(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see hazard at left");
      done();
    });

    test("No obstacle at Left", (done) => {
      cleanData();
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtLeft(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isFalse(result, "did not return false for no obstacles");
      done();
    });
  });

  suite("Obstacle at Right", () => {
    test("Snake at Right", (done) => {
      cleanData();
      mockSnake.body = [{ x: 6, y: 5 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtRight(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see snake at right");
      done();
    });

    test("Me at Right", (done) => {
      cleanData();
      mockMe.body = [{ x: 6, y: 5 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtRight(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see me at right");
      done();
    });

    test("Hazard at Right", (done) => {
      cleanData();
      mockBoard.hazards = [{ x: 6, y: 5 }];
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtRight(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isTrue(result, "did not see hazard at right");
      done();
    });

    test("No obstacle at Right", (done) => {
      cleanData();
      const obstacleList = findOccupiedSquares(mockRequest);
      const result = obsAtRight(mockMe.head, obstacleList);
      assert.isBoolean(result, "did not return boolean");
      assert.isFalse(result, "did not return false for no obstacles");
      done();
    });
  });
});
