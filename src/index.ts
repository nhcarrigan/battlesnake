import express from "express";
import bodyParser from "body-parser";
import { handleIndex } from "./controllers/handleIndex";
import { handleStart } from "./controllers/handleStart";
import { handleMove } from "./controllers/handleMove";
import { handleEnd } from "./controllers/handleEnd";
import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import { logHandler } from "./utils/logHandler";
import http from "http";
import https from "https";
import { readFile } from "fs/promises";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  integrations: [
    new RewriteFrames({
      root: global.__dirname,
    }),
  ],
});

export const app = express();

(async () => {
  app.use(bodyParser.json());

  app.get("/", handleIndex);
  app.post("/start", handleStart);
  app.post("/move", handleMove);
  app.post("/end", handleEnd);

  const httpServer = http.createServer(app);

  httpServer.listen(1080, () => {
    logHandler.log("http", "http server listening on port 1080");
  });

  if (process.env.NODE_ENV === "production") {
    const privateKey = await readFile(
      "/etc/letsencrypt/live/battlesnake.nhcarrigan.com/privkey.pem",
      "utf8"
    );
    const certificate = await readFile(
      "/etc/letsencrypt/live/battlesnake.nhcarrigan.com/cert.pem",
      "utf8"
    );
    const ca = await readFile(
      "/etc/letsencrypt/live/battlesnake.nhcarrigan.com/chain.pem",
      "utf8"
    );

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca,
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(1443, () => {
      logHandler.log("http", "https server listening on port 1443");
    });
  }
})();
