import { Document } from "mongoose"

declare interface Question{
  "_id"?: string,
  "questionId": string
  "surveyId"?: string
  "image": string // image url
  "title": string
  "type": "mbti" | "survey"
  "date": number
  "contents": {
    "main": string
    "options": Option[]
  }
  "mbtiChange"?: {
    "factor": "EI" | "NS" | "FT" | "JP"
    "value": number
  }[]
}