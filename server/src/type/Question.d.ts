import { Document } from "mongoose"

declare interface Question extends Document{
  "question_id": string
  "survey_id"?: string
  "image": string // image url
  "title": string
  "type": "mbti" | "survey"
  "date": Date
  "contents": {
    "main": string
    "options": Option[]
  }
  "mbti_change"?: {
    "factor": "IE" | "NS" | "TF" | "JP"
    "value": number
  }[]
}