import { Request, Response } from "express";

/**
 * Used to confirm game start. Sends 200OK.
 * @param _ Unused
 * @param response Response packet
 */
export const handleStart = (_: Request, response: Response): void => {
  console.info("Started!");
  response.status(200).send("ok");
};
