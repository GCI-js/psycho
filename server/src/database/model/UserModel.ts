import { model, Schema } from "mongoose";
import { User } from "../../../../common/type/User";

export const DOCUMENT_NAME = "User";
export const COLLECTION_NAME = "users";

const userSchema = new Schema({
  userId: { type: String, required: true },
  nickname: { type: String, required: false },
  kakaoKey: {
    tokenType: { type: String, required: false },
    accessToken: { type: String, required: false },
    refreshToken: { type: String, required: false },
    expiration: { type: Number, required: false },
  },
  googleKey: {
    tokenType: { type: String, required: false },
    accessToken: { type: String, required: false },
    refreshToken: { type: String, required: false },
    expiration: { type: Number, required: false },
  },
  naverKey: {
    tokenType: { type: String, required: false },
    accessToken: { type: String, required: false },
    refreshToken: { type: String, required: false },
    expiration: { type: Number, required: false },
  },
  bloodType: { type: String, required: false },
  country: { type: String, required: false },
  city: { type: String, required: false },
  district: { type: String, required: false },
  gender: { type: String, required: false },
  birth: { type: Number, required: false },
  mbtis: [
    {
      date: { type: Number, required: false },
      IE: { type: String, required: false },
      NS: { type: String, required: false },
      TF: { type: String, required: false },
      JP: { type: String, required: false },
    },
  ],
  hashtags: [
    {
      hashtagId: { type: String, required: false },
      name: { type: String, required: false },
    },
  ],
  recentResponse: [{ type: Boolean, required: false }],
  balance: { type: Number, required: false },
  gambleHist: [
    {
      gambleId: { type: String, required: false },
      index: { type: Number, required: false },
      balance: { type: Number, required: false },
      result: { type: Number, required: false },
    },
  ],
  connHist: [{ type: Number, required: false }],
  lastConn: { type: Number, required: false },
  contConn: { type: Number, required: false },
});

export const UserModel = model<User>(
  DOCUMENT_NAME,
  userSchema,
  COLLECTION_NAME
);
