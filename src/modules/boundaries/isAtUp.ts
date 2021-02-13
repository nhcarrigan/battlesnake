import { CoordinateInt } from "../../interfaces/CoordinateInt";

/**
 * Returns true if the snake's head is at the top of the board.
 * @param {CoordinateInt} location My snake's current head location
 * @param {number} height The 0-indexed height of the board
 */
export const isAtUp = (location: CoordinateInt, height: number): boolean => {
  return location.y === height - 1;
};
