import { Betting } from "../../../../common/type/Betting";
import { UserModel } from "../model/UserModel";
import { User } from "../../../../common/type/User";

export const UserController = {
  getUserNum: async () => {
    let cnt = await UserModel.count({});
    return cnt;
  },
  createUser: async (newUser: User) => {
    await UserModel.create(newUser);
  },
  findAllUsers: async () => {
    return await UserModel.find({});
  },
  find100UsersByHashtag: async (hashtagId: string) => {
    return await UserModel.find({
      hashtags: { $elemMatch: { hashtagId: hashtagId } },
    }).limit(100);
  },
  findOne: async (userId: string) => {
    let filter = { userId: userId };
    return await UserModel.findOne(filter).lean<User>();
  },
  findOneAndUpdate: async (userId: string, update: any) => {
    let filter = { userId: userId };
    await UserModel.findOneAndUpdate(filter, update);
    return;
  },
  findOneAndAddBettingHist: async (
    userId: string,
    bettingId: string,
    optionIndex: number,
    balance: number
  ) => {
    let filter = { userId: userId };
    let user: User = await UserModel.findOne(filter).lean<User>();
    let bettingHist = {
      bettingId: bettingId,
      index: optionIndex,
      balance: balance,
      result: -1,
    };
    user["bettingHist"].push(bettingHist);
    await UserModel.findOneAndUpdate(filter, user);
    return;
  },
  findOneAndGetBettingHist: async (userId: string) => {
    let filter = { userId: userId };
    return await UserModel.findOne(filter).select("bettingHist");
  },
};
