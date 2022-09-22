import { Document } from "mongoose"

declare interface Hashtag{
  "_id"?: string,
  "hashtag_id": string
  "name"?: string
  "type"?: "blood_type" | "country" | "city" | "district" | "gender" | "birth" | "mbti" | "free"
  "mbti_cnt": number[]
}