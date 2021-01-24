import { BattleSnakeInt } from "./BattleSnakeInt";
import { BoardInt } from "./BoardInt";
import { GameInt } from "./GameInt";

export interface RequestBodyInt {
  game: GameInt;
  turn: number;
  board: BoardInt;
  you: BattleSnakeInt;
}
