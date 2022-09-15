import { model, Schema } from 'mongoose';
import { User } from '../../type/User';

export const DOCUMENT_NAME = 'User';
export const COLLECTION_NAME = 'users';

const userSchema = new Schema({
  user_id: { type: String, required: true },
  nickname: { type: String, required: false },
  kakao_key: {
    token_type: { type: String, required: false },
    access_token: { type: String, required: false },
    refresh_token: { type: String, required: false },
    expiration: { type: Date, required: false }
  },
  google_key: {
    token_type:  { type: String, required: false },
    access_token:  { type: String, required: false },
    refresh_token:  { type: String, required: false },
    expiration: { type: Date, required: false }
  },
  naver_key: {
    token_type:  { type: String, required: false },
    access_token:  { type: String, required: false },
    refresh_token:  { type: String, required: false },
    expiration: { type: Date, required: false }
  },
  blood_type:  { type: String, required: false },
  country:  { type: String, required: false },
  city:  { type: String, required: false },
  district:  { type: String, required: false },
  gender:  { type: String, required: false },
  birth: { type: Date, required: false },
  mbtis: [
    {
      date: { type: Date, required: false },
      IE:  { type: String, required: false },
      NS:  { type: String, required: false },
      TF:  { type: String, required: false },
      JP:  { type: String, required: false },
    }
  ],
  hashtags: [{
    hashtag_id: { type: String, required: false },
    name: { type: String, required: false },
  }],
  recent_response: [{ type: Boolean, required: false }],
  balance: { type: Number, required: false }
});

export const UserModel = model<User>(DOCUMENT_NAME, userSchema, COLLECTION_NAME);