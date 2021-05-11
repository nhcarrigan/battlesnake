import { Request, Response } from "express";
import { errorHandler } from "../utils/errorHandler";

/**
 * Used for the `/` route, sends back the snake's customisation data.
 * @param _ Request packet
 * @param response Response packet
 */
export const handleIndex = (_: Request, response: Response): void => {
  try {
    const battleSnakeInfo = {
      apiversion: "1",
      author: "nhcarrigan",
      color: "#451c70",
      head: "pixel",
      tail: "pixel",
    };
    response.status(200).json(battleSnakeInfo);
  } catch (err) {
    errorHandler("index controller", err);
  }
};
