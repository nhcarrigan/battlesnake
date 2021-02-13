import { Request, Response } from "express";
import { CoordinateInt } from "../interfaces/CoordinateInt";
import { MoveType } from "../interfaces/MoveInt";
import { RequestBodyInt } from "../interfaces/RequestBodyInt";
import { calculateMove } from "../modules/calculateMove";
import { findOccupiedSquares } from "../modules/findOccupiedSquares";

/**
 * Receives a GameInt in the request packet, sends back a valid
 * move direction as string.
 * @param request Request packet
 * @param response Response packet
 */
export const handleMove = (request: Request, response: Response): void => {
  const gameData: RequestBodyInt = request.body;

  if (!gameData.you) {
    response.status(400).send({ error: "This snake not found." });
    return;
  }

  if (!gameData.board) {
    response.status(400).send({ error: "Game board not found." });
    return;
  }

  const myHead = gameData.you.head;
  const occupiedSquares: CoordinateInt[] = findOccupiedSquares(gameData);
  const board = gameData.board;

  const move: MoveType = calculateMove(myHead, occupiedSquares, board);

  response.status(200).send({ move });
};
