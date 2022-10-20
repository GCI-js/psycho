import { Gamble } from "../../type/Gamble";
import { UserModel } from "../model/UserModel";
import { User } from "../../type/User";

export const UserController = {
  findAllUsers: async () => {
    return await UserModel.find({});
  },
  find100UsersByHashtag: async (hashtagName: string) => {
    return await UserModel.find({
      hashtags: { $elemMatch: { title: { $eq: hashtagName } } },
    }).limit(100);
  },
  findOneAndAddGambleHist: async (
    userId: string,
    gambleId: string,
    optionIndex: number,
    balance: number
  ) => {
    let filter = { userId: userId };
    let user: User = await UserModel.findOne(filter).lean<User>();
    let gambleHist = {
      gambleId: gambleId,
      index: optionIndex,
      balance: balance,
      result: -1,
    };
    user["gambleHist"].push(gambleHist);
    await UserModel.findOneAndUpdate(filter, user);
    return;
  },
  findOneAndGetGambleHist: async (userId: string) => {
    let filter = { userId: userId };
    return await UserModel.find(filter).select("gambleHist");
  },
};
