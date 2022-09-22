import { Hashtag } from "../../type/Hashtag";
import { HashtagModel } from "../model/HashtagModel";


export const HashtagController = {
  getHashtagNum: async () => {
    const cnt = HashtagModel.count({});
    return cnt;
  },
  createHashtag: async (hashtag: Hashtag) => {
    HashtagModel.create(hashtag);
  },
  findAllHashtags: async () => {
    return HashtagModel.find({});
  },
  findOne: async (name: string) => {
    return HashtagModel.findOne({"name": name}).lean<Hashtag>();
  },
  findByIdAndUpdate: async (hashtag: Hashtag) => {
    HashtagModel.findByIdAndUpdate(hashtag._id, hashtag, ((err: any, res: any) => {
      console.log(err);
    }));
  },
  getMbtiCnt: async (name: string) => {
    const hashtag = await HashtagModel.findOne({"name": name}).lean<Hashtag>();
    return hashtag.mbti_cnt;
  }
}