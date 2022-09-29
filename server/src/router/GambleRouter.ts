import express, { Request, Response } from 'express';
import { GambleModel } from '../database/model/GambleModel';

export const GambleRouter = express.Router();

GambleRouter.post('/', (req: Request, res: Response) => {
  let gamble
  GambleModel
});

GambleRouter.put('/items/:id', (req: Request, res: Response) => {

});

GambleRouter.delete('/items/:id', (req: Request, res: Response) => {

});

GambleRouter.get('/items', (req: Request, res: Response) => {

});

GambleRouter.get('/items/:id', (req: Request, res: Response) => {

});

GambleRouter.put('/bet', (req: Request, res: Response) => {

});

GambleRouter.get('/results/:gambleId/:userId', (req: Request, res: Response) => {

});





/*
.Gamble API
- 갬블 생성 (POST) /gamble
req = {
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
  "result": number
}
res = Gamble
- 겜블 업데이트 (PUT) /gamble/items/:id
req = {
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
  "result": number
}
res = Gamble
- 겜블 삭제 (DELETE) /gamble/items/:id
req = {}
res = Gamble[]
- 갬블 목록 조회 (GET) /gamble/items
req = {}
res = Gamble[]
- id로 단일 갬블 조회 (GET) /gamble/items/:id
req = {}
res = Gamble
- 베팅하기 (PUT) /gamble/bet
req = {
  "gambleId": string,
  "optionIndex": number,
  "balance": number
}
res = Gamble
- 결과 확인 (GET) /gamble/results/:gambleId/:userId
req = {}
res = {
  "isWin": Boolean,
  "balance": number
}
*/