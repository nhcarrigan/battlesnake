import { Request, Response } from "express";

/**
 * Used to confirm game end. Sends 200OK.
 * @param _ Unused
 * @param response Response packet
 */
export const handleEnd = (_: Request, response: Response): void => {
  console.info("END");
  response.status(200).send("ok");
};
