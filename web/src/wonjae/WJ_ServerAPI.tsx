// Backend API Module
import { User } from "../../../common/type/User";
import mock_users from "../../../common/mock_data/mock_users.json";

export const getUserWithCredential = (credential: String) => {
  return mock_users;
  // TODO
  // get user info API
};

export const updateUserInfo = (user: User) => {
  // TODO
  // update user info API
};
