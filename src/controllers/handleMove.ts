import { Request, Response } from "express";

export const handleMove = (request: Request, response: Response): void => {
  const gameData = request.body;

  const possibleMoves = ["up", "down", "left", "right"];
  const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

  console.info("MOVE: " + move);
  response.status(200).send({ move });
};
