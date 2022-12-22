import { Request, Response } from "express";
import { Betting } from "../../../../common/type/Betting";
import { User } from "../../../../common/type/User";
import { CalcDividend, GetNewId } from "../../component/Util";
import { BettingModel } from "../model/BettingModel";
import { UserModel } from "../model/UserModel";

export const BettingController = {
  createBetting: async (req: Request, res: Response) => {
    console.log("createBetting");
    let newBettingId: string = (
      await GetNewId(BettingModel, "bettingId")
    ).toString();
    let newBetting: Betting = {
      bettingId: newBettingId,
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
    await BettingModel.create(newBetting);
    let filter = { bettingId: newBettingId };
    res.status(200).json(await BettingModel.findOne(filter).lean<Betting>());
  },
  readBettings: async (req: Request, res: Response) => {
    console.log("readBetting");
    res.status(200).json(await BettingModel.find(req.query).lean<Betting[]>());
  },
  updateBetting: async (req: Request, res: Response) => {
    console.log("updateBetting");
    let filter = { bettingId: req.params.bettingId };
    await BettingModel.findOneAndUpdate(filter, req.body);
    res.status(200).json(await BettingModel.findOne(filter).lean<Betting>());
  },
  deleteBetting: async (req: Request, res: Response) => {
    console.log("deleteBetting");
    let filter = { bettingId: req.params.bettingId };
    await BettingModel.findOneAndDelete(filter);
    res.status(200).json({});
  },
  bet: async (req: Request, res: Response) => {
    console.log("bet");
    let filterA = { userId: req.body.userid };
    let user: User = await UserModel.findOne(filterA).lean<User>();
    if (
      user.bettingHist.find((element) => {
        return element.bettingId == req.body.bettingId;
      }) != undefined
    ) {
      res.status(400).json({});
      return;
    } // 먼저 해당 유저가 이전에 해당 겜블에 배팅을 한 적이 있는지 체크
    let filterB = { bettingId: req.body.bettingId };
    let betting: Betting = await BettingModel.findOne(filterB).lean<Betting>();
    betting["betState"][req.body.optionIndex]["userCnt"]++;
    betting["betState"][req.body.optionIndex]["balance"] += req.body.balance;
    betting["betState"][req.body.optionIndex]["dividend"] = CalcDividend(
      betting,
      req.body.optionIndex
    );
    betting["betState"][1 - req.body.optionIndex]["dividend"] = CalcDividend(
      betting,
      1 - req.body.optionIndex
    ); //현재 베팅 선택지가 항상 2개라는 가정 하에 설계. 3개 이상이 될 경우 CalcDividend 와 index 지정 부분(1-index)을 수정해야함
    await BettingModel.findOneAndUpdate(filterB, betting); //겜블에 배팅 내역을 반영
    user.bettingHist.push({
      bettingId: req.body.bettingId,
      index: req.body.optionIndex,
      balance: req.body.balance,
      result: -1,
    });
    await UserModel.findOneAndUpdate(filterA, user); //유저 정보에 bettingHist를 추가
    res.status(200).json({
      betting: await BettingModel.findOne(filterB).lean<Betting>(),
      user: await UserModel.findOne(filterA).lean<User>(),
    });
  },
  adjustBettingResult: async (req: Request, res: Response) => {
    console.log("adjustBettingResult");
    let filterA = { bettingId: req.params.bettingId };
    let betting: Betting = await BettingModel.findOne(filterA).lean<Betting>();
    if (betting.closeTime >= new Date().getTime()) {
      res.status(400).json({});
      return;
    } //아직 결과 발표 시간이 되지 않았는데 요청이 들어올 경우를 방지
    let filterB = { userId: req.params.userId };
    let user: User = await UserModel.findOne(filterB).lean<User>();
    let bettingHist = user.bettingHist.find((element) => {
      return element.bettingId == req.params.bettingId;
    });
    if (bettingHist == undefined || bettingHist.result != -1) {
      res.status(400).json({});
      return;
    } //유저가 해당 베팅에 베팅한 기록이 없거나 이미 결과를 정산한 경우를 방지
    let result = 0;
    let gainedBalance = 0;
    if (betting["answerIndex"] === bettingHist["index"]) {
      //베팅을 맞춘 경우
      gainedBalance =
        bettingHist["balance"] *
        betting["betState"].filter((state) => {
          return state.index == bettingHist?.index;
        })[0]["dividend"];
      result = 1;
    }
    user["bettingHist"] = user["bettingHist"].map((h) => {
      if (h["bettingId"] == req.params.bettingId) h["result"] = result;
      return h;
    });
    user["balance"] += gainedBalance;
    await UserModel.findOneAndUpdate(filterB, user); //베팅 결과를 유저의 정보에 반영
    res.status(200).json({
      result: betting["result"],
      answerIndex: betting["answerIndex"],
    });
  },
};
