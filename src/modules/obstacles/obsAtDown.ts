import { CoordinateInt } from "../../interfaces/CoordinateInt";

export const obsAtDown = (
  location: CoordinateInt,
  obstacles: CoordinateInt[]
): boolean => {
  return obstacles.some(
    (coord) => coord.x === location.x && coord.y === location.y - 1
  );
};
