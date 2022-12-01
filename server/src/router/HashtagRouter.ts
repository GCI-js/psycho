import express from "express";
import { HashtagController } from "../database/controller/HashtagController";

export const HashtagRouter = express.Router();

HashtagRouter.post("/", HashtagController.createHashtag);
HashtagRouter.get("/items", HashtagController.findAllHashtags);
HashtagRouter.get("/items/id/:hashtagId", HashtagController.findHashtagById);
HashtagRouter.get(
  "/items/name/:hashtagName",
  HashtagController.findHashtagByName
);
HashtagRouter.put(
  "/statistics/:hashtagName",
  HashtagController.updateHashtagMbtiCnt
);
HashtagRouter.get("/assoc/:hashtagName", HashtagController.getAssocHashtag);
