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
  }
}