<<<<<<<<<<<About hashtag>>>>>>>>>>>


POST /hashtag/ - 새로운 해시태그를 생성
- Request.body
{ 
  "name": string, 
  "type": "blood_type" | "country" | "city" | "district" | "gender" | "birth" | "mbti" | "free" 
}
- Response
{
  Hashtag
}

GET /hashtag/items - 전체 해시태그 목록 조회
- Request.body
{
}
- Response
{
  Hashtag[]
}

PUT /hashtag/statistics/:hashtagName - 해시태그 통계 갱신
- Request.body
{
  "mbtiIdx": number,
  “increase”: boolean
}
- Response
{
  Hashtag
}

GET /hashtag/statistics/:hashtagName - 해시태그 통계 조회 (단일 해시태그)
- Request.body
{
  “name”:string
}
- Response
{
  “mbtiCnt”: number[16]
}

GET /hashtag/assoc/:hashtagName - 연관 해시태그 조회 (최대 10개)
- Request.body
{
  “name”: string
}
- Response
{
  "hashtags": string[]
}

(미구현) DELETE /hashtag/items/:id - 해시태그 삭제
(미구현) GET /hashtag/statistics/hashtagName?a, b - 2개의 해시태그에 대한 교집합 통계 조회


<<<<<<<<<<<About gamble>>>>>>>>>>>


POST /gamble - 갬블 생성
- Request.body
{
  "surveyId": string,
  "openTime": number,
  "closeTime": number,
  "title": string,
  "contents": {
    "main": string,
    "options": {
      "index": number,
      "name": string
    }[],
  },
  "betState": {
    "index": number,
    "name": string,
    "userCnt": number,
    "balance": number,
    "dividend": number
  }[],
  "result": {
    "index": number,
    "rate": number
  }[],
  "answerIndex": number
}
- Response
{
  Gamble
}

PUT /gamble/items/:id - 갬블 갱신
- Request.body
{
  Gamble //바꾸려는 부분만
}
- Response
{
  Gamble
}

DELETE /gamble/items/:id - 갬블 삭제
- Request.body
{
}
- Response
{
  Gamble[] //전체 목록
}

GET /gamble/items - 전체 갬블 조회
- Request.body
{
}
- Response
{
  Gamble[] //전체 목록
}

GET /gamble/items/:id - 단일 갬블 조회
- Request.body
{
}
- Response
{
  Gamble
}

PUT /gamble/bet - 베팅하기
- Request.body
{
  "userId": string,
  "gambleId": string,
  "optionIndex": number,
  "balance": number
}
- Response
{
  "gamble": Gamble, //베팅 후 갬블 상황
  "gambleHist": User.gambleHist //유저의 전체 겜블 내역
}

PUT /gamble/result/:gambleId/:userId - 겜블 결과 확인
- Request.body
{
}
- Response
{
  "result": {
    "index": number,
    "rate": number
  }[],
  "answerIndex": number
}


- Request.body
{
}
- Response
{
}

