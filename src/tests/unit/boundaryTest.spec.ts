import { assert } from "chai";
import { BoardInt } from "../../interfaces/BoardInt";
import { CoordinateInt } from "../../interfaces/CoordinateInt";
import { isAtUp } from "../../modules/boundaries/isAtUp";
import { isAtDown } from "../../modules/boundaries/isAtDown";
import { isAtLeft } from "../../modules/boundaries/isAtLeft";
import { isAtRight } from "../../modules/boundaries/isAtRight";

const defaultMockBoard: BoardInt = {
  height: 11,
  width: 11,
  food: [],
  snakes: [],
  hazards: [],
};
suite("Boundary Detection", () => {
  suite("Up Boundary", () => {
    test("should detect the upper boundary", (done) => {
      const mockLocation: CoordinateInt = { x: 3, y: 10 };
      const result = isAtUp(mockLocation, defaultMockBoard.height);
      assert.isTrue(result, "did not return true when at upper boundary");
      done();
    });
    test("should detect not at upper boundary", (done) => {
      const mockLocation: CoordinateInt = { x: 3, y: 2 };
      const result = isAtUp(mockLocation, defaultMockBoard.height);
      assert.isFalse(result, "did not return false when not at upper boundary");
      done();
    });
  });

  suite("Down Boundary", () => {
    test("should detect the lower boundary", (done) => {
      const mockLocation: CoordinateInt = { x: 7, y: 0 };
      const result = isAtDown(mockLocation);
      assert.isTrue(result, "did not return true when at lower boundary");
      done();
    });

    test("should detect not at lower boundary", (done) => {
      const mockLocation: CoordinateInt = { x: 8, y: 1 };
      const result = isAtDown(mockLocation);
      assert.isFalse(result, "did not return false when not at lower boundary");
      done();
    });
  });

  suite("Left Boundary", () => {
    test("should detect the left boundary", (done) => {
      const mockLocation: CoordinateInt = { x: 0, y: 100 };
      const result = isAtLeft(mockLocation);
      assert.isTrue(result, "did not return true when at left boundary");
      done();
    });

    test("should detect not at left boundary", (done) => {
      const mockLocation: CoordinateInt = { x: 1, y: 0 };
      const result = isAtLeft(mockLocation);
      assert.isFalse(result, "did not return false when not at left boundary");
      done();
    });
  });

  suite("Right Boundary", () => {
    test("should detect the right boundary", (done) => {
      const mockLocation: CoordinateInt = { x: 10, y: 7 };
      const result = isAtRight(mockLocation, defaultMockBoard.width);
      assert.isTrue(result, "did not return true when at right boundary");
      done();
    });

    test("should detect not at right boundary", (done) => {
      const mockLocation: CoordinateInt = { x: 9, y: 1 };
      const result = isAtRight(mockLocation, defaultMockBoard.width);
      assert.isFalse(result, "did not return false when not at right boundary");
      done();
    });
  });
});
