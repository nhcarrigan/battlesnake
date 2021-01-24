import { Request, Response } from "express";

export const handleStart = (request: Request, response: Response): void => {
  const gameData = request.body;

  console.info("Started!");
  response.status(200).send("ok");
};
