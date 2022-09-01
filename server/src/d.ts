/* <DB Collection Info> */
interface Mbti {
  "date": Date
  "IE": number
  "NS": number
  "TF": number
}

interface Hashtag {
  "id": string
  "name": string
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
  "blood_type": "A" | "B" | "AB" | "O"
  "country": string
  "city": string
  "district": string
  "gender": "male" | "female"
  "birth": Date
  "mbti": Mbti[]
  "recent_response": boolean[]
  "balance": number
}
