import { Request, Response } from "express";

export const handleIndex = (_: Request, response: Response): void => {
  const battleSnakeInfo = {
    apiversion: "1",
    author: "nhcarrigan",
    color: "#3a3240",
    head: "default",
    tail: "default",
  };
  response.status(200).json(battleSnakeInfo);
};
