import { assert } from "chai";
import { BoardInt } from "../../interfaces/BoardInt";
import { CoordinateInt } from "../../interfaces/CoordinateInt";
import { calculateMove } from "../../modules/calculateMove";

const defaultMockBoard: BoardInt = {
  height: 11,
  width: 11,
  food: [],
  snakes: [],
  hazards: [],
};
const location = { x: 5, y: 5 };
const blockedUp = { x: 5, y: 6 };
const blockedDown = { x: 5, y: 4 };
const blockedLeft = { x: 4, y: 5 };
const blockedRight = { x: 6, y: 5 };

suite("Calculating Moves", () => {
  test("No obstacles", (done) => {
    const obstacles: CoordinateInt[] = [];
    const result = calculateMove(location, obstacles, defaultMockBoard);
    const validMoves = ["left", "up", "right", "down"];
    assert.include(validMoves, result, "does not provide a valid move");
    done();
  });

  test("Moving Up", (done) => {
    const obstacles = [blockedDown, blockedLeft, blockedRight];
    const result = calculateMove(location, obstacles, defaultMockBoard);
    assert.equal(result, "up", "did not move up");
    done();
  });

  test("Moving Down", (done) => {
    const obstacles = [blockedUp, blockedLeft, blockedRight];
    const result = calculateMove(location, obstacles, defaultMockBoard);
    assert.equal(result, "down", "did not move down");
    done();
  });

  test("Moving Left", (done) => {
    const obstacles = [blockedUp, blockedDown, blockedRight];
    const result = calculateMove(location, obstacles, defaultMockBoard);
    assert.equal(result, "left", "did not move left");
    done();
  });

  test("Moving Right", (done) => {
    const obstacles = [blockedUp, blockedDown, blockedLeft];
    const result = calculateMove(location, obstacles, defaultMockBoard);
    assert.equal(result, "right", "did not move right");
    done();
  });

  test("No valid move should go up", (done) => {
    const obstacles = [blockedUp, blockedDown, blockedRight, blockedLeft];
    const result = calculateMove(location, obstacles, defaultMockBoard);
    assert.equal(result, "up", "when no valid moves, did not move up");
    done();
  });
});
