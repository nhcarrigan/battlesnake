import { Request, Response } from "express";
import { RequestBodyInt } from "../interfaces/RequestBodyInt";

export const handleStart = (request: Request, response: Response): void => {
  const gameData: RequestBodyInt = request.body;

  console.info("Started!");
  response.status(200).send("ok");
};
