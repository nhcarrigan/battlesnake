import { CoordinateInt } from "../../interfaces/CoordinateInt";

/**
 * Returns true if there is an obstacle directly above the snake's head.
 * @param {CoordinateInt} location My snake's current head location
 * @param {CoordinateInt[]} obstacles Array of occupied board squares
 */
export const obsAtUp = (
  location: CoordinateInt,
  obstacles: CoordinateInt[]
): boolean => {
  return obstacles.some(
    (coord) => coord.x === location.x && coord.y === location.y - 1
  );
};
