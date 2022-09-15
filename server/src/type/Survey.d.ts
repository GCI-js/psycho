import { Document } from "mongoose";

declare interface Survey extends Document{
  "survey_id": string
  "question_id": string
  "hashtags": Hashtag[]
  "options": Option[]
  "result": number[][]
}