import { assert } from "chai";
import { BoardInt } from "../../interfaces/BoardInt";
import { CoordinateInt } from "../../interfaces/CoordinateInt";
import { MoveType } from "../../interfaces/MoveInt";
import { moveToCentre } from "../../modules/moveToCentre";

const boardSize = [11, 11];
suite("Move to Centre", () => {
  suite("move closer left", () => {
    test("move is available", (done) => {
      const location = { x: 8, y: 4 };
      const availableMoves: MoveType[] = ["left", "right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      assert.equal(result, "left", "did not return left");
      done();
    });
    test("move is not available", (done) => {
      const location = { x: 7, y: 6 };
      const availableMoves: MoveType[] = ["right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      assert.notEqual(result, "left", "returned left when not available");
      done();
    });
  });

  suite("move closer right", () => {
    test("move is available", (done) => {
      const location = { x: 3, y: 4 };
      const availableMoves: MoveType[] = ["left", "right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      assert.equal(result, "right", "did not return right");
      done();
    });
    test("move is not available", (done) => {
      const location = { x: 1, y: 3 };
      const availableMoves: MoveType[] = ["left", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      assert.notEqual(result, "right", "returned right when not available");
      done();
    });
  });

  suite("move closer up", () => {
    test("move is available", (done) => {
      const location = { x: 6, y: 3 };
      const availableMoves: MoveType[] = ["left", "right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      assert.equal(result, "up", "did not return up");
      done();
    });
    test("move is not available", (done) => {
      const location = { x: 7, y: 0 };
      const availableMoves: MoveType[] = ["right", "left", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      assert.notEqual(result, "up", "returned up when not available");
      done();
    });
  });

  suite("move closer down", () => {
    test("move is available", (done) => {
      const location = { x: 8, y: 10 };
      const availableMoves: MoveType[] = ["left", "right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      assert.equal(result, "down", "did not return down");
      done();
    });
    test("move is not available", (done) => {
      const location = { x: 4, y: 9 };
      const availableMoves: MoveType[] = ["right", "up", "left"];
      const result = moveToCentre(location, boardSize, availableMoves);
      assert.notEqual(result, "down", "returned down when not available");
      done();
    });
  });

  suite("respond to same distance", () => {
    test("move up or right", (done) => {
      const location = { x: 4, y: 4 };
      const availableMoves: MoveType[] = ["left", "right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      const expected = ["up", "right"];
      assert.include(expected, result, "did not move up or right");
      done();
    });

    test("move up or left", (done) => {
      const location = { x: 6, y: 4 };
      const availableMoves: MoveType[] = ["left", "right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      const expected = ["up", "left"];
      assert.include(expected, result, "did not move up or left");
      done();
    });

    test("move down or right", (done) => {
      const location = { x: 4, y: 6 };
      const availableMoves: MoveType[] = ["left", "right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      const expected = ["down", "right"];
      assert.include(expected, result, "did not move down or right");
      done();
    });

    test("move down or left", (done) => {
      const location = { x: 4, y: 6 };
      const availableMoves: MoveType[] = ["left", "right", "up", "down"];
      const result = moveToCentre(location, boardSize, availableMoves);
      const expected = ["down", "left"];
      assert.include(expected, result, "did not move down or left");
      done();
    });
  });

  suite("fallback to random move", () => {
    test("only return valid moves", (done) => {
      const location = { x: 5, y: 5 };
      const availableMoves: MoveType[] = ["left", "right"];
      const resultOne = moveToCentre(location, boardSize, availableMoves);
      const resultTwo = moveToCentre(location, boardSize, availableMoves);
      const resultThree = moveToCentre(location, boardSize, availableMoves);
      assert.include(availableMoves, resultOne, "random move was not valid");
      assert.include(availableMoves, resultTwo, "random move was not valid");
      assert.include(availableMoves, resultThree, "random move was not valid");
      done();
    });
  });
});
