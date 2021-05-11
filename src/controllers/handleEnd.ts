import { Request, Response } from "express";
import { errorHandler } from "../utils/errorHandler";

/**
 * Used to confirm game end. Sends 200OK.
 * @param _ Unused
 * @param response Response packet
 */
export const handleEnd = (_: Request, response: Response): void => {
  try {
    response.status(200).send("ok");
  } catch (err) {
    errorHandler("end controller", err);
  }
};
