import { CoordinateInt } from "../../interfaces/CoordinateInt";

export const obsAtRight = (
  location: CoordinateInt,
  obstacles: CoordinateInt[]
): boolean => {
  return obstacles.some(
    (coord) => coord.y === location.y && coord.x === location.x + 1
  );
};
