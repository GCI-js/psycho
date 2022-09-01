/* <DB Collection Info> */
type Blood_type = "A" | "B" | "AB" | "O";

interface Mbti {
  "date": Date
  "IE": number
  "NS": number
  "TF": number
  "JP": number
}

interface Hashtag {
  "hashtag_id": string
  "name": string
  "type"?: "blood_type" | "country" | "city" | "district" | "gender" | "birth" | "mbti" | "free"
  "mbti_cnt"?: number[]
}

interface User {
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
  "blood_type": Blood_type
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

interface Option {
  "index": number
  "name": string  
}

interface Survey {
  "survey_id": string
  "question_id": string
  "hashtags": Hashtag[]
  "options": Option[]
  "result": number[][]
}

interface Newsletter {
  "news_letter_id": string
  "thumbnail": string // image url
  "title": string
  "hashtags": Hashtag[]
  "url": string // original post url
  "writer": string
}

interface Question {
  "question_id": string
  "survey_id"?: string
  "image": string // image url
  "title": string
  "type": "mbti" | "survey"
  "date": Date
  "contents": {ㅎ
    "main": string
    "options": Option[]
  }
  "mbti_change"?: {
    "factor": "IE" | "NS" | "TF" | "JP"
    "value": number
  }[]
}