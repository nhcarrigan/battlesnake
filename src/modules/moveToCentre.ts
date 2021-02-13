import { CoordinateInt } from "../interfaces/CoordinateInt";
import { MoveType } from "../interfaces/MoveInt";

export const moveToCentre = (
  location: CoordinateInt,
  boardSize: number[],
  availableMoves: MoveType[]
): MoveType => {
  const [boardX, boardY] = boardSize;
  const centrePoint = {
    x: Math.floor(boardX / 2),
    y: Math.floor(boardY / 2),
  };

  const horizontalDiff = Math.abs(location.x - centrePoint.x);
  const verticalDiff = Math.abs(location.y - centrePoint.y);

  // move X
  if (horizontalDiff > verticalDiff) {
    if (location.x > centrePoint.x && availableMoves.includes("left")) {
      return "left";
    }
    if (location.x < centrePoint.x && availableMoves.includes("right")) {
      return "right";
    }
  }

  // move Y
  if (horizontalDiff < verticalDiff) {
    if (location.y > centrePoint.y && availableMoves.includes("down")) {
      return "down";
    }
    if (location.y < centrePoint.y && availableMoves.includes("up")) {
      return "up";
    }
  }

  if (horizontalDiff === verticalDiff) {
    if (location.y > centrePoint.y && availableMoves.includes("down")) {
      return "down";
    }
    if (location.y < centrePoint.y && availableMoves.includes("up")) {
      return "up";
    }
    if (location.x > centrePoint.x && availableMoves.includes("left")) {
      return "left";
    }
    if (location.x < centrePoint.x && availableMoves.includes("right")) {
      return "right";
    }
  }

  // This should only run when snake cannot move closer to centre with available moves
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};
