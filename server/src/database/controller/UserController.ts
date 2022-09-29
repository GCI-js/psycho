import { UserModel } from "../model/UserModel";

export const UserController = {
  findAllUsers: async () => {
    return UserModel.find({});
  },
  find100UsersByHashtag: async (hashtag_name: string) => {
    return UserModel.find({"hashtags": {"$elemMatch": {"title": {"$eq": hashtag_name}}}}).limit(100);
  }
}