import express, { NextFunction, Request, Response } from "express";
import { UserController } from "../database/controller/UserController";
import { User } from "../../../common/type/User";
export const UserRouter = express.Router();

UserRouter.post("/", async (req: Request, res: Response) => {
  let userID: string = await (await UserController.getUserNum()).toString();
  //   const d = new Date();
  // let day = d.getDay()
  // let newConnHist=[];
  // newConnHist[day]=1;
  let newUser: User = {
    userId: userID,
    nickname: req.body.nickname,
    // kakaoKey: {
    //   tokenType: req.body.kakaoKey.tokenType,
    //   accessToken: req.body.kakaoKey.accessToken,
    //   refreshToken: req.body.kakaoKey.refreshToken,
    //   expiration: req.body.kakaoKey.expiration,
    // },
    // googleKey: {
    //   tokenType: req.body.googleKey.tokenType,
    //   accessToken: req.body.googleKey.accessToken,
    //   refreshToken: req.body.googleKey.refreshToken,
    //   expiration: req.body.googleKey.expiration,
    // },
    // naverKey: {
    //   tokenType: req.body.naverKey.tokenType,
    //   accessToken: req.body.naverKey.accessToken,
    //   refreshToken: req.body.naverKey.refreshToken,
    //   expiration: req.body.naverKey.expiration,
    // },
    kakaoKey: req.body.kakaoKey,
    googleKey: req.body.googleKey,
    naverKey: req.body.naverKey,
    signUpStage: 0,
    bloodType: req.body.bloodType,
    country: req.body.country,
    city: req.body.city,
    district: req.body.district,
    gender: req.body.gender,
    birth: req.body.birth,
    mbtis: req.body.mbtis,
    hashtags: req.body.hashtags,
    recentResponse: [false, false, false, false, false, false, false],
    balance: req.body.balance,
    bettingHist: [],
    connHist: [0, 0, 0, 0, 0, 0, 0],
    lastConn: 0,
    contConn: 1,
  };
  await UserController.createUser(newUser);
  res.status(200).json(await UserController.findOne(userID));
});

UserRouter.put("/edit/:id", async (req: Request, res: Response) => {
  let userData = await UserController.findOne(req.params.id);
  // let userID: string = await (await UserController.getUserNum()).toString();
  //   const d = new Date();
  // let day = d.getDay()
  // let newConnHist=[];
  // newConnHist[day]=1;
  let newUserData: User = {
    userId: req.params.id,
    nickname: req.body.nickname ? req.body.nickname : userData.nickname,
    kakaoKey: req.body.kakaoKey ? req.body.kakaoKey : userData.kakaoKey,
    googleKey: req.body.googleKey ? req.body.googleKey : userData.googleKey,
    naverKey: req.body.naverKey ? req.body.naverKey : userData.naverKey,
    signUpStage: req.body.signUpStage
      ? req.body.signUpStage
      : userData.signUpStage,
    bloodType: req.body.bloodType ? req.body.bloodType : userData.bloodType,
    country: req.body.country ? req.body.country : userData.country,
    city: req.body.city ? req.body.city : userData.city,
    district: req.body.district ? req.body.district : userData.district,
    gender: req.body.gender ? req.body.gender : userData.gender,
    birth: req.body.birth ? req.body.birth : userData.birth,
    mbtis: req.body.mbtis ? req.body.mbtis : userData.mbtis,
    hashtags: req.body.hashtags ? req.body.hashtags : userData.hashtags,
    recentResponse: req.body.recentResponse
      ? req.body.recentResponse
      : userData.recentResponse,
    balance: req.body.balance ? req.body.balance : userData.balance,
    gambleHist: req.body.gambleHist ? req.body.gambleHist : userData.gambleHist,
    connHist: req.body.connHist ? req.body.connHist : userData.connHist,
    lastConn: req.body.lastConn ? req.body.lastConn : userData.lastConn,
    contConn: req.body.contConn ? req.body.contConn : userData.contConn,
  };
  await UserController.updateOne(newUserData);
  res.status(200).json(await UserController.findOne(req.params.id));
});
UserRouter.get(
  "/items",
  async (req: Request, res: Response, next: NextFunction) => {
    const userList = await UserController.findAllUsers();
    res.status(200).json(userList);
  }
);
UserRouter.get(
  "/items/count",
  async (req: Request, res: Response, next: NextFunction) => {
    const userCount = await UserController.getUserNum();
    res.status(200).json(userCount);
  }
);

// UserRouter.post("/login",async (req: Request, res: Response) => {

// });

UserRouter.get(
  "/items/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserController.findOne(req.params.id);
    res.status(200).json(user);
  }
);
// UserRouter.get('/:id/recent_response', async (req: Request, res: Response, next: NextFunction) => {
//   const user = await UserController.findUserById(req.params.id);
//   user?.recentResponse
//   res.status(200).json(  user?.recentResponse    );
// });
// UserRouter.get('/:id/balance', async (req: Request, res: Response, next: NextFunction) => {
//   const user = await UserController.findUserById(req.params.id);
//   user?.recentResponse
//   res.status(200).json(  user?.balance    );
// })
