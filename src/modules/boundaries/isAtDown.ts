import { CoordinateInt } from "../../interfaces/CoordinateInt";

/**
 * Returns true if the snake's head is at the bottom of the board.
 * @param {CoordinateInt} location My snake's current head location
 */
export const isAtDown = (location: CoordinateInt): boolean => {
  return location.y === 0;
};
