import express, { Request, Response } from "express";
import { HashtagController } from "../database/controller/HashtagController";
import { UserController } from "../database/controller/UserController";
import { Hashtag } from "../type/Hashtag";

export const HashtagRouter = express.Router();

HashtagRouter.post("/", async (req: Request, res: Response) => {
  await HashtagController.createHashtag(req.body.name, req.body.type);
  res.status(200).json(await HashtagController.findOne(req.body.name));
});

HashtagRouter.get("/items", async (req: Request, res: Response) => {
  const hashtagList = await HashtagController.findAllHashtags();
  res.status(200).json(hashtagList);
});

HashtagRouter.put(
  "/statistics/:hashtagName",
  async (req: Request, res: Response) => {
    let hashtag: Hashtag = await HashtagController.findOne(
      req.params.hashtagName
    );
    hashtag.mbtiCnt[+req.body.mbtiIdx] += req.body.increase ? 1 : -1;
    await HashtagController.findByIdAndUpdate(hashtag);
    res.status(200).json(hashtag);
  }
);

HashtagRouter.get(
  "/statistics/:hashtagName",
  async (req: Request, res: Response) => {
    let hashtag = await HashtagController.findOne(req.params.hashtagName);
    if (!hashtag) {
      HashtagController.createHashtag(req.params.hashtagName);
      hashtag = await HashtagController.findOne(req.params.hashtagName);
    }
    res.status(200).json(hashtag.mbtiCnt);
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
    res
      .status(200)
      .json(hashtagCnt.slice(0, 10).map((hashtag) => hashtag.name));
  }
);

/*
.Hashtag API
- 해시태그 생성 (POST) /hashtag
req = { 
  "name": string, 
  "type": "blood_type" | "country" | "city" | "district" | "gender" | "birth" | "mbti" | "free" 
}
res = Hashtag
- 해시태그 목록 조회 (GET) /hashtag/items
req = {}
res = Hashtag[]
- 해시태그 통계 갱신 (PUT) /hashtag/statistics/:hashtagName
req = {
  "mbtiIdx": number,
  “increase”: boolean
}
res = Hashtag
- 해시태그 통계 조회 (GET) /hashtag/statistics?name=a,b
req = [{
  “name”:string
}]
res = {
  “mbtiCnt”: number[16]
}
- 연관 해시태그 조회 (GET) /hashtag/assoc/:hashtagName
req = {
  “name”: string
}
res = Hashtag[]
- 해시태그 삭제 (DELETE) /hashtag/items/:id
req = {}
res = Hashtag[]
*/
