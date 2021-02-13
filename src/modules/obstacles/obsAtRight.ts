import { CoordinateInt } from "../../interfaces/CoordinateInt";

/**
 * Returns true if there is an obstacle directly right of the snake's head.
 * @param {CoordinateInt} location My snake's current head location
 * @param {CoordinateInt[]} obstacles Array of occupied board squares
 */
export const obsAtRight = (
  location: CoordinateInt,
  obstacles: CoordinateInt[]
): boolean => {
  return obstacles.some(
    (coord) => coord.y === location.y && coord.x === location.x + 1
  );
};
