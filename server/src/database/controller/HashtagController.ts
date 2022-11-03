import { Hashtag } from "../../type/Hashtag";
import { HashtagModel } from "../model/HashtagModel";

declare type HashtagType =
  | "bloodtype"
  | "country"
  | "city"
  | "district"
  | "gender"
  | "birth"
  | "mbti"
  | "free";

export const HashtagController = {
  getHashtagNum: async () => {
    let cnt = await HashtagModel.count({});
    return cnt;
  },
  createHashtag: async (name: string, type?: HashtagType) => {
    let hashtagNum: number = await HashtagModel.count({});
    let newHashtag: Hashtag = {
      hashtagId: hashtagNum.toString(),
      name: name,
      type: type ? type : "free",
      mbtiCnt: Array(16).fill(0),
    };
    HashtagModel.create(newHashtag);
  },
  findAllHashtags: async () => {
    return HashtagModel.find({});
  },
  findOne: async (name: string) => {
    return HashtagModel.findOne({ name: name }).lean<Hashtag>();
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
