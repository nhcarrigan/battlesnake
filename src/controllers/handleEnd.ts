import { Request, Response } from "express";
import { RequestBodyInt } from "../interfaces/RequestBodyInt";

export const handleEnd = (request: Request, response: Response): void => {
  const gameData: RequestBodyInt = request.body;

  console.info("END");
  response.status(200).send("ok");
};
