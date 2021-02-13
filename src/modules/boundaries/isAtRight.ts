import { CoordinateInt } from "../../interfaces/CoordinateInt";

/**
 * Returns true if the snake's head is at the right of the board.
 * @param {CoordinateInt} location My snake's current head location
 * @param {number} width The 0-indexed width of the board
 */
export const isAtRight = (location: CoordinateInt, width: number): boolean => {
  return location.x === width - 1;
};
