import { BoardInt } from "../interfaces/BoardInt";
import { CoordinateInt } from "../interfaces/CoordinateInt";
import { MoveType } from "../interfaces/MoveInt";
import { errorHandler } from "../utils/errorHandler";
import { isAtDown } from "./boundaries/isAtDown";
import { isAtLeft } from "./boundaries/isAtLeft";
import { isAtRight } from "./boundaries/isAtRight";
import { isAtUp } from "./boundaries/isAtUp";
import { moveToCentre } from "./moveToCentre";
import { obsAtDown } from "./obstacles/obsAtDown";
import { obsAtLeft } from "./obstacles/obsAtLeft";
import { obsAtRight } from "./obstacles/obsAtRight";
import { obsAtUp } from "./obstacles/obsAtUp";

/**
 * Calculates available moves, then selects non-losing move randomly.
 * @param {CoordinateInt} location My snake's current head location
 * @param {CoordinateInt[]} obstacles Array of occupied board squares
 * @param {BoardInt} board Board data (for size)
 */
export const calculateMove = (
  location: CoordinateInt,
  obstacles: CoordinateInt[],
  board: BoardInt
): MoveType => {
  try {
    const validMoveList: { [M in MoveType]: boolean } = {
      left: !isAtLeft(location) && !obsAtLeft(location, obstacles),
      right:
        !isAtRight(location, board.width) && !obsAtRight(location, obstacles),
      up: !isAtUp(location, board.height) && !obsAtUp(location, obstacles),
      down: !isAtDown(location) && !obsAtDown(location, obstacles),
    };

    const allMoveArray = Object.entries(validMoveList) as [MoveType, boolean][];
    const validMoveArray = allMoveArray
      .filter((move) => move[1])
      .map((move) => move[0]);

    // fallback case for when snake is boxed in.
    if (!validMoveArray.length) {
      return "up";
    }

    return moveToCentre(location, [board.width, board.height], validMoveArray);
  } catch (err) {
    errorHandler("calculate move", err);
    return "up";
  }
};
