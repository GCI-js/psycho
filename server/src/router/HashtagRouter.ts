import express from "express";
import { HashtagController } from "../database/controller/HashtagController";

export const HashtagRouter = express.Router();

HashtagRouter.post("/", HashtagController.createHashtag);
HashtagRouter.get("/items", HashtagController.readHashtags);
HashtagRouter.put("/items/:hashtagId", HashtagController.updateHashtag);
HashtagRouter.delete("/items/:hashtagId", HashtagController.deleteHashtag);
HashtagRouter.put("/mbtiCnt/:hashtagId", HashtagController.increaseMbtiCnt);
HashtagRouter.get("/assoc/:hashtagId", HashtagController.getAssocHashtags);
