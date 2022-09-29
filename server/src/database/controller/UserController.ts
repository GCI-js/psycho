import { UserModel } from "../model/UserModel";

export const UserController = {
  findAllUsers: async () => {
    return UserModel.find({});
  },
  find100UsersByHashtag: async (hashtagName: string) => {
    return UserModel.find({"hashtags": {"$elemMatch": {"title": {"$eq": hashtagName}}}}).limit(100);
  }
}