import { Request, Response } from "express";
import { Hashtag } from "../../../../common/type/Hashtag";
import { GetNewId } from "../../component/Util";
import { HashtagModel } from "../model/HashtagModel";
import { UserController } from "./UserController";

export const HashtagController = {
  createHashtag: async (req: Request, res: Response) => {
    let filterA = { name: req.body.name };
    let hashtag: Hashtag = await HashtagModel.findOne(filterA).lean<Hashtag>();
    if (hashtag !== null) {
      res.status(400).json({});
    }
    let newHashtagId: string = (
      await GetNewId(HashtagModel, "hashtagId")
    ).toString();
    let newHashtag: Hashtag = {
      hashtagId: newHashtagId,
      name: req.body.name,
      type: req.body.type,
      mbtiCnt: Array(16).fill(0),
    };
    await HashtagModel.create(newHashtag);
    let filterB = { hashtagId: newHashtagId };
    res.status(200).json(await HashtagModel.findOne(filterB).lean<Hashtag>());
  },
  readHashtags: async (req: Request, res: Response) => {
    let filter: any = {};
    if (req.query.name) filter.name = req.query.name;
    if (req.query.hashtagId) filter.hashtagId = req.query.hashtagId;
    if (req.query.type) filter.type = req.query.type;
    res.status(200).json(await HashtagModel.find(filter).lean<Hashtag[]>());
  },
  updateHashtag: async (req: Request, res: Response) => {
    let filter = { hashtagId: req.params.hashtagId };
    await HashtagModel.findOneAndUpdate(filter, req.body);
    res.status(200).json(await HashtagModel.findOne(filter).lean<Hashtag>());
  },
  deleteHashtag: async (req: Request, res: Response) => {
    let filter = { hashtagId: req.params.hashtagId };
    await HashtagModel.findOneAndDelete(filter);
    res.status(200).json({});
  },
  increaseMbtiCnt: async (req: Request, res: Response) => {
    let filter = { hashtagId: req.params.hashtagId };
    let hashtag: Hashtag = await HashtagModel.findOne(filter).lean<Hashtag>();
    hashtag.mbtiCnt[req.body.mbtiIdx] += req.body.increase ? 1 : -1;
    await HashtagModel.findOneAndUpdate(filter, hashtag);
    res.status(200).json(await HashtagModel.findOne(filter).lean<Hashtag>());
  },
  getAssocHashtags: async (req: Request, res: Response) => {
    let users = await UserController.find100UsersByHashtag(
      req.params.hashtagId
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
};
