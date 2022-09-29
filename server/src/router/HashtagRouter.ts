import express, { Request, Response } from 'express';
import { HashtagController } from '../database/controller/HashtagController';
import { UserController } from '../database/controller/UserController';
import { Hashtag } from '../type/Hashtag';

export const HashtagRouter = express.Router();

HashtagRouter.post('/', async (req: Request, res: Response) => {
  console.log(req);
  let hashtagNum: number = await HashtagController.getHashtagNum();
  let newHashtag: Hashtag = {
    "hashtag_id": hashtagNum.toString(),
    "name": req.body.name,
    "type": req.body.type,
    "mbti_cnt": Array(16).fill(0)
  };
  await HashtagController.createHashtag(newHashtag);
  res.status(200).json(newHashtag);
});

HashtagRouter.get('/list', async (req: Request, res: Response) => {
  const hashtagList = await HashtagController.findAllHashtags();
  res.status(200).json(hashtagList);
});

HashtagRouter.put('/update', async (req: Request, res: Response) => {
  let hashtag: Hashtag = await HashtagController.findOne(req.body.name);
  hashtag.mbti_cnt[+req.body.mbti_idx] += req.body.increase ? 1 : -1;
  await HashtagController.findByIdAndUpdate(hashtag);
  res.status(200).json(hashtag);
});

HashtagRouter.get('/mbticnt/:name', async (req: Request, res: Response) => {
  let mbti_cnt = await HashtagController.getMbtiCnt(req.params.name);
  res.status(200).json(mbti_cnt);
});

HashtagRouter.get('/assoc/:name', async (req: Request, res: Response) => {
  let hashtag_name = req.params.name;
  let users = await UserController.find100UsersByHashtag(hashtag_name);
  let hashtagCnt: { hashtag_id: string, name: string, cnt: number }[] = [];  
  for(let i = 0; i < users.length; i++){
    for(let j = 0; j < users[i].hashtags.length; j++){
      if(users[i].hashtags[j].name == hashtag_name) continue;
      let hashtagIdx = hashtagCnt.findIndex(hashtag => hashtag.name == users[i].hashtags[j].name);
      if(hashtagIdx == -1){
        hashtagCnt.push({hashtag_id: users[i].hashtags[j].hashtag_id, 
                         name: users[i].hashtags[j].name, 
                         cnt: 1});
      }
      else{
        hashtagCnt[hashtagIdx].cnt += 1;
      }
    }
  }
  hashtagCnt.sort((a: any, b: any) => {return a.cnt < b.cnt ? 1 : -1});
  res.status(200).json(hashtagCnt.slice(0, 10).map((hashtag) => hashtag.name));
});

/*
.Hashtag API
- 해시태그 생성 (POST) /hashtag
req = { 
  "name": string, 
  "type": "blood_type" | "country" | "city" | "district" | "gender" | "birth" | "mbti" | "free" 
}
res = Hashtag
- 해시태그 통계 갱신 (PUT)
req = {
  “name”: string,
  "mbti_idx": number,
  “increase”: boolean
}
res = Hashtag
- 해시태그 통계 조회 (GET)
req = [{
  “name”:string
}]
res = {
  “mbti_cnt”: number[16]
}
- 연관 해시태그 조회 (GET)
req = {
  “name”: string
}
res = Hashtag[]
*/