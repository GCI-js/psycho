declare interface Survey {
  "survey_id": string
  "question_id": string
  "hashtags": Hashtag[]
  "options": Option[]
  "result": number[][]
}