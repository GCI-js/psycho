import { Request, Response } from "express";
import { HashtagType } from "../../../../common/type/common";
import { Hashtag } from "../../../../common/type/Hashtag";
import { HashtagModel } from "../model/HashtagModel";

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
  findOne: async (name: string) => {
    let filter = { name: name };
    return await HashtagModel.findOne(filter).lean<Hashtag>();
  },
  findByIdAndUpdate: async (hashtag: Hashtag) => {
    HashtagModel.findByIdAndUpdate(
      hashtag._id,
      hashtag,
      (err: any, res: any) => {
        console.log(err);
      }
    );
  },
};
