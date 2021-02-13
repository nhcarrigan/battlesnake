import express from "express";
import bodyParser from "body-parser";
import { handleIndex } from "./controllers/handleIndex";
import { handleStart } from "./controllers/handleStart";
import { handleMove } from "./controllers/handleMove";
import { handleEnd } from "./controllers/handleEnd";

const PORT = process.env.PORT || 4000;

export const app = express();
app.use(bodyParser.json());

app.get("/", handleIndex);
app.post("/start", handleStart);
app.post("/move", handleMove);
app.post("/end", handleEnd);

app.listen(PORT, () => {
  console.info(`BattleSnake Server listening on port ${PORT}`);
});
