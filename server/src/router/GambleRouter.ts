import express, { Request, Response } from 'express';

export const GambleRouter = express.Router();


/*
.Gamble API
- 갬블 생성 (POST) /gamble
req = {

}

- 해시태그 생성 (POST) /hashtag
req = { 
  "name": string, 
  "type": "blood_type" | "country" | "city" | "district" | "gender" | "birth" | "mbti" | "free" 
}
res = Hashtag
- 해시태그 통계 갱신 (PUT)
req = {
  “name”: string,
  "mbtiIdx": number,
  “increase”: boolean
}
res = Hashtag
- 해시태그 통계 조회 (GET)
req = [{
  “name”:string
}]
res = {
  “mbti_cnt”: number[16]
}
- 연관 해시태그 조회 (GET)
req = {
  “name”: string
}
res = Hashtag[]
*/