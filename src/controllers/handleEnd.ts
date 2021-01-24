import { Request, Response } from "express";

export const handleEnd = (request: Request, response: Response): void => {
  const gameData = request.body;

  console.info("END");
  response.status(200).send("ok");
};
