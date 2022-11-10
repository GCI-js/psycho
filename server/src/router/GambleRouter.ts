import express, { Request, Response } from "express";
import { CalcDividend } from "../component/Util";
import { GambleController } from "../database/controller/GambleController";
import { UserController } from "../database/controller/UserController";
import { Gamble } from "../../../common/type/Gamble";
import { User } from "../../../common/type/User";

export const GambleRouter = express.Router();

GambleRouter.post("/", async (req: Request, res: Response) => {
  let gambleId: string = (
    (await await GambleController.getGambleNum()) + 1
  ).toString();
  console.log(gambleId);
  let newGamble: Gamble = {
    gambleId: gambleId,
    surveyId: req.body.surveyId,
    openTime: req.body.openTime,
    closeTime: req.body.closeTime,
    title: req.body.title,
    contents: {
      main: req.body.contents.main,
      options: req.body.contents.options,
    },
    betState: [
      {
        index: 0,
        name: req.body.contents.options[0].name,
        userCnt: 0,
        balance: 0,
        dividend: 0,
      },
      {
        index: 1,
        name: req.body.contents.options[1].name,
        userCnt: 0,
        balance: 0,
        dividend: 0,
      },
    ],
    result: req.body.result,
    answerIndex: req.body.answerIndex,
  };
  await GambleController.createGamble(newGamble);
  res.status(200).json(await GambleController.findOne(gambleId));
});

GambleRouter.put("/items/:id", async (req: Request, res: Response) => {
  await GambleController.findOneAndUpdate(req.params.id, req.body);
  res.status(200).json(await GambleController.findOne(req.params.id));
});

GambleRouter.delete("/items/:id", async (req: Request, res: Response) => {
  await GambleController.findOneAndDelete(req.params.id);
  res.status(200).json(await GambleController.findAll());
});

GambleRouter.get("/items", async (req: Request, res: Response) => {
  res.status(200).json(await GambleController.findAll());
});

GambleRouter.get("/items/:id", async (req: Request, res: Response) => {
  res.status(200).json(await GambleController.findOne(req.params.id));
});

GambleRouter.put("/bet", async (req: Request, res: Response) => {
  let user: User = await UserController.findOne(req.body.userId);
  if (
    user.gambleHist.find((element) => {
      return element.gambleId == req.body.gambleId;
    }) != undefined
  ) {
    res.status(400).json({});
    return;
  }
  let gamble: Gamble = await GambleController.findOne(req.body.gambleId);
  gamble["betState"][req.body.optionIndex]["userCnt"]++;
  gamble["betState"][req.body.optionIndex]["balance"] += req.body.balance;
  gamble["betState"][req.body.optionIndex]["dividend"] = CalcDividend(
    gamble,
    req.body.optionIndex
  );
  gamble["betState"][1 - req.body.optionIndex]["dividend"] = CalcDividend(
    gamble,
    1 - req.body.optionIndex
  );
  await GambleController.findOneAndUpdate(req.body.gambleId, gamble);
  await UserController.findOneAndAddGambleHist(
    req.body.userId,
    req.body.gambleId,
    req.body.optionIndex,
    req.body.balance
  );
  res.status(200).json({
    gamble: await GambleController.findOne(req.body.gambleId),
    gambleHist: await UserController.findOneAndGetGambleHist(req.body.userId),
  });
});
// 일단 이 호출은 현재시간이 closeTime 보다 이후인 경우에만 발생한다. 하지만 더블 쳌 필요.
// 또한 이미 확인한 것인지도 체크할 필요 있음
GambleRouter.put(
  "/results/:gambleId/:userId",
  async (req: Request, res: Response) => {
    let gamble: Gamble = await GambleController.findOne(req.params.gambleId);
    if (gamble.closeTime >= new Date().getTime()) {
      res.status(400).json({});
      return;
    }
    let user: User = await UserController.findOne(req.params.userId);
    if (
      user.gambleHist.find((element) => {
        return element.gambleId == req.params.gambleId;
      })?.result != -1
    ) {
      res.status(400).json({});
      return;
    }
    let hist = user["gambleHist"].filter((hist) => {
      return hist["gambleId"] == req.params.gambleId;
    })[0];
    console.log(hist);
    let result = 0;
    let gainedBalance = 0;
    if (gamble["answerIndex"] === hist["index"]) {
      gainedBalance =
        hist["balance"] *
        gamble["betState"].filter((state) => {
          return state["index"] == hist["index"];
        })[0]["dividend"];
      result = 1;
    }
    user["gambleHist"] = user["gambleHist"].map((h) => {
      if (h["gambleId"] == req.params.gambleId) h["result"] = result;
      return h;
    });
    user["balance"] += gainedBalance;
    console.log(user);
    await UserController.findOneAndUpdate(req.params.userId, user);
    res.status(200).json({
      result: gamble["result"],
      answerIndex: gamble["answerIndex"],
    });
  } //
);

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
  "result": number,
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
  "userId": string,
  "gambleId": string,
  "optionIndex": number,
  "balance": number
}
res = {
  "gamble"?: Gamble,
  "gambleHist": User.gambleHist
  "result": boolean (true: successfully betted, false: already betted before)
}
- 결과 확인 (PUT) /gamble/result/:gambleId/:userId
req = {
}
res = {
  "result": {
    "index": number,
    "rate": number
  }[],
  "answerIndex": number
}
*/
