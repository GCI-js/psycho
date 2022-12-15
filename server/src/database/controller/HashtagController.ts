import { Request, Response } from "express";
import { Hashtag } from "../../../../common/type/Hashtag";
import { HashtagModel } from "../model/HashtagModel";
import { UserController } from "./UserController";

export const HashtagController = {
  getNewId: async () => {
    let maxId = Math.max(
      ...(await HashtagModel.find().lean()).map((e) => {
        return +e.hashtagId;
      })
    );
    console.log(maxId);
    return maxId + 1;
  },
  createHashtag: async (req: Request, res: Response) => {
    let hashtag: Hashtag = await HashtagController.findOne(req.body.name);
    if (hashtag !== null) {
      res.status(400).json({});
    }
    let hashtagId: string = (await HashtagController.getNewId()).toString();
    let newHashtag: Hashtag = {
      hashtagId: hashtagId,
      name: req.body.name,
      type: req.body.type,
      mbtiCnt: Array(16).fill(0),
    };
    await HashtagModel.create(newHashtag);
    res.status(200).json(await HashtagController.findOne(req.body.name));
  },
  findAllHashtags: async (req: Request, res: Response) => {
    res.status(200).json(await HashtagModel.find({}));
  },
  findHashtagById: async (req: Request, res: Response) => {
    let filter = { id: req.params.hashtagId };
    res.status(200).json(await HashtagModel.find(filter));
  },
  findHashtagByName: async (req: Request, res: Response) => {
    let filter = { name: req.params.hashtagName };
    res.status(200).json(await HashtagModel.find(filter));
  },
  updateHashtagMbtiCnt: async (req: Request, res: Response) => {
    let filter = { name: req.params.hashtagName };
    let hashtag: Hashtag = await HashtagModel.findOne(filter).lean<Hashtag>();
    hashtag.mbtiCnt[req.body.mbtiIdx] += req.body.increase ? 1 : -1;
    await HashtagModel.findByIdAndUpdate(
      hashtag._id,
      hashtag,
      (err: any, res: any) => {
        console.log(err);
      }
    );
    res.status(200).json(hashtag);
  },
  getAssocHashtag: async (req: Request, res: Response) => {
    let users = await UserController.find100UsersByHashtag(
      req.params.hashtagName
    );
    let hashtagCnt: { hashtagId: string; name: string; cnt: number }[] = [];
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].hashtags.length; j++) {
        if (users[i].hashtags[j].name == req.params.hashtagName) continue;
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
  },
  findOne: async (name: string) => {
    let filter = { name: name };
    return await HashtagModel.findOne(filter).lean<Hashtag>();
  },
};
