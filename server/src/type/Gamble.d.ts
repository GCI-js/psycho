import { Document } from "mongoose";

declare interface Gamble extends Document{
  "gamble_id": string
  "survey_id": string
  "due": number
  "title": string
  "contents": {
    "main": string
    "options": Option[]
  }
  "state": [
    {
      "index": number
      "name": string
      "user_cnt": number
      "balance": number
      "dividend": number //배당률
    }
  ],
  "result": number // one of index. answer. should not be transferred until due.
}