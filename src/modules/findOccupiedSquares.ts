import { CoordinateInt } from "../interfaces/CoordinateInt";
import { RequestBodyInt } from "../interfaces/RequestBodyInt";
import { errorHandler } from "../utils/errorHandler";

/**
 * Generates an array of all currently occupied board locations.
 *
 * @param {RequestBodyInt} data the API data received from the game client
 */
export const findOccupiedSquares = (data: RequestBodyInt): CoordinateInt[] => {
  try {
    if (!data.you || !data.board) {
      return [];
    }
    const list: CoordinateInt[] = [];
    list.push(...data.you.body);
    data.board.snakes.forEach((snake) => {
      list.push(...snake.body);
    });
    list.push(...data.board.hazards);
    return list;
  } catch (err) {
    errorHandler("occupied squares", err);
    return [];
  }
};
