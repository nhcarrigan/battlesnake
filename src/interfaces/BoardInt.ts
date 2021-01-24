import { BattleSnakeInt } from "./BattleSnakeInt";
import { CoordinateInt } from "./CoordinateInt";

export interface BoardInt {
  height: number;
  width: number;
  food: CoordinateInt[];
  hazards: CoordinateInt[];
  snakes: BattleSnakeInt[];
}
