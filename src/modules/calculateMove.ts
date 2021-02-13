import { CoordinateInt } from "../interfaces/CoordinateInt";
import { MoveType } from "../interfaces/MoveInt";

export const calculateMove = (
  location: CoordinateInt,
  occupied: CoordinateInt[],
  boardSize: CoordinateInt
): MoveType => {
  const validMoveList: { [M in MoveType]: boolean } = {
    left: true,
    right: true,
    up: true,
    down: true,
  };

  // check if we are at boundary
  if (location.x === 0) {
    validMoveList.left = false;
  }
  if (location.x === boardSize.x - 1) {
    validMoveList.right = false;
  }
  if (location.y === 0) {
    validMoveList.down = false;
  }
  if (location.y === boardSize.y - 1) {
    validMoveList.up = false;
  }

  // check for collision
  if (
    occupied.some(
      (coord) => coord.x === location.x && coord.y === location.y + 1
    )
  ) {
    validMoveList.up = false;
  }
  if (
    occupied.some(
      (coord) => coord.x === location.x && coord.y === location.y - 1
    )
  ) {
    validMoveList.down = false;
  }
  if (
    occupied.some(
      (coord) => coord.y === location.y && coord.x === location.x - 1
    )
  ) {
    validMoveList.left = false;
  }
  if (
    occupied.some(
      (coord) => coord.y === location.y && coord.x === location.x + 1
    )
  ) {
    validMoveList.right = false;
  }

  // get new valid moves
  const allMoveArray = Object.entries(validMoveList) as [MoveType, boolean][];
  const validMoveArray = allMoveArray.filter((move) => move[1]);

  const moveIndex = Math.floor(Math.random() * validMoveArray.length);

  const move = validMoveArray[moveIndex][0];
  return move;
};
