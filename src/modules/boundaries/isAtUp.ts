import { CoordinateInt } from "../../interfaces/CoordinateInt";

export const isAtUp = (location: CoordinateInt, height: number): boolean => {
  return location.y === height - 1;
};
