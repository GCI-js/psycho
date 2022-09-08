import { UserModel } from "../model/UserModel";


export const UserController = {
  findAllUsers: async () => {
    return UserModel.find({});
  }
}