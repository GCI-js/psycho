import { Document } from "mongoose"

declare interface User extends Document{
  "user_id": string
  "nickname": string
  "kakao_key":{
    "token_type": string
    "access_token": string
    "refresh_token": string
    "expiration": number
  }
  "google_key":{
    "token_type": string
    "access_token": string
    "refresh_token": string
    "expiration": number
  }
  "naver_key":{
    "token_type": string
    "access_token": string
    "refresh_token": string
    "expiration": number
  }
  "blood_type": BloodType
  "country": string
  "city": string
  "district": string
  "gender": "male" | "female"
  "birth": number
  "mbtis": Mbti[]
  "hashtags": Hashtag[]
  "recent_response": boolean[]
  "balance": number
  "gamble_log": {
    "gamble_id": string
    "index": number //선택지 index
    "balance": number //배팅금액
  }[]
}