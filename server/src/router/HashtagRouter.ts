import express, { Request, Response } from "express";
import { HashtagController } from "../database/controller/HashtagController";
import { UserController } from "../database/controller/UserController";
import { Hashtag } from "../../../common/type/Hashtag";

export const HashtagRouter = express.Router();

HashtagRouter.post("/", HashtagController.createHashtag);

HashtagRouter.get("/items", HashtagController.findAllHashtags);

HashtagRouter.put(
  "/statistics/:hashtagName",
  async (req: Request, res: Response) => {
    let hashtag: Hashtag = await HashtagController.findOne(
      req.params.hashtagName
    );
    hashtag.mbtiCnt[req.body.mbtiIdx] += req.body.increase ? 1 : -1;
    await HashtagController.findByIdAndUpdate(hashtag);
    res.status(200).json(hashtag);
  }
);

HashtagRouter.get(
  "/statistics/:hashtagName",
  async (req: Request, res: Response) => {
    let hashtag = await HashtagController.findOne(req.params.hashtagName);
    // if (!hashtag) {
    //   HashtagController.createHashtag2(req.params.hashtagName);
    //   hashtag = await HashtagController.findOne(req.params.hashtagName);
    // } // 에러 추가 처리 필요
    res.status(200).json({ mbtiCnt: hashtag.mbtiCnt });
  }
);

HashtagRouter.get(
  "/assoc/:hashtagName",
  async (req: Request, res: Response) => {
    let hashtagName = req.params.hashtagName;
    let users = await UserController.find100UsersByHashtag(hashtagName);
    let hashtagCnt: { hashtagId: string; name: string; cnt: number }[] = [];
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].hashtags.length; j++) {
        if (users[i].hashtags[j].name == hashtagName) continue;
        let hashtagIdx = hashtagCnt.findIndex(
          (hashtag) => hashtag.name == users[i].hashtags[j].name
        );
        if (hashtagIdx == -1) {
          hashtagCnt.push({
            hashtagId: users[i].hashtags[j].hashtagId,
            name: users[i].hashtags[j].name,
            cnt: 1,
          });
        } else {
          hashtagCnt[hashtagIdx].cnt += 1;
        }
      }
    }
    hashtagCnt.sort((a: any, b: any) => {
      return a.cnt < b.cnt ? 1 : -1;
    });
    res.status(200).json({
      hashtags: hashtagCnt.slice(0, 10).map((hashtag) => hashtag.name),
    });
  }
);
