import { CoordinateInt } from "../../interfaces/CoordinateInt";

export const isAtRight = (location: CoordinateInt, width: number): boolean => {
  return location.x === width - 1;
};
