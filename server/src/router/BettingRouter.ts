import express from "express";
import { BettingController } from "../database/controller/BettingController";

export const BettingRouter = express.Router();

BettingRouter.post("/", BettingController.createBetting);
BettingRouter.get("/items", BettingController.readBettings);
BettingRouter.put("/items/:bettingId", BettingController.updateBetting);
BettingRouter.delete("/items/:bettingId", BettingController.deleteBetting);
BettingRouter.put("/bet", BettingController.bet);
BettingRouter.put(
  "/result/:bettingId/:userId",
  BettingController.adjustBettingResult
);
