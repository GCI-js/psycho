import { Document } from "mongoose"

declare interface User extends Document{
  "user_id": string
  "nickname": string
  "kakao_key":{
    "token_type": string
    "access_token": string
    "refresh_token": string
    "expiration": Date
  }
  "google_key":{
    "token_type": string
    "access_token": string
    "refresh_token": string
    "expiration": Date
  }
  "naver_key":{
    "token_type": string
    "access_token": string
    "refresh_token": string
    "expiration": Date
  }
  "blood_type": BloodType
  "country": string
  "city": string
  "district": string
  "gender": "male" | "female"
  "birth": Date
  "mbtis": Mbti[]
  "hashtags": Hashtag[]
  "recent_response": boolean[]
  "balance": number
}