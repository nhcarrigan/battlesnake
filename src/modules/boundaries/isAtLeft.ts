import { CoordinateInt } from "../../interfaces/CoordinateInt";

export const isAtLeft = (location: CoordinateInt): boolean => {
  return location.x === 0;
};
