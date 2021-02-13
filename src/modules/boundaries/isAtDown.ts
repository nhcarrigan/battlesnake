import { CoordinateInt } from "../../interfaces/CoordinateInt";

export const isAtDown = (location: CoordinateInt): boolean => {
  return location.y === 0;
};
