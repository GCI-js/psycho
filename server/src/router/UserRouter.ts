import express, { NextFunction, Request, Response } from "express";
import { UserController } from "../database/controller/UserController";
import {User} from "../../../common/type/User";
export const UserRouter = express.Router();

UserRouter.get('/items', async (req: Request, res: Response, next: NextFunction) => {
  const userList = await UserController.findAllUsers();
  res.status(200).json(userList);
});
UserRouter.post("/",async (req:Request,res:Response)=>{
  let userID : string = await(
    await UserController.getUserNum()
  ).toString();
//   const d = new Date();
// let day = d.getDay()
// let newConnHist=[];
// newConnHist[day]=1;
  let newUser : User = {
    userId: userID,
  nickname: req.body.nickname,
  kakaoKey: {
    tokenType: req.body.kakaoKey.tokenType,
    accessToken: req.body.kakaoKey.accessToken,
    refreshToken: req.body.kakaoKey.refreshToken,
    expiration: req.body.kakaoKey.expiration,
  },
  googleKey: {
    tokenType: req.body.googleKey.tokenType,
    accessToken: req.body.googleKey.accessToken,
    refreshToken: req.body.googleKey.refreshToken,
    expiration: req.body.googleKey.expiration,
  },
  naverKey: {
    tokenType: req.body.naverKey.tokenType,
    accessToken: req.body.naverKey.accessToken,
    refreshToken: req.body.naverKey.refreshToken,
    expiration: req.body.naverKey.expiration,
  },
  bloodType: req.body.bloodType,
  country:req.body.country,
  city: req.body.city,
  district: req.body.district,
  gender: req.body.gender,
  birth:req.body.birth,
  mbtis: req.body.mbtis,
  hashtags: req.body.hashtags,
  recentResponse: [
    false,
    false,
    false,
    false,
    false,
    false,
    false
],
  balance: req.body.balance,
  gambleHist: [],
  connHist: [0,0,0,0,0,0,0],
  lastConn: 0,
  contConn: 1,
  };
  await UserController.createUser(newUser);
  res.status(200).json(await UserController.findOne(userID));
});

// UserRouter.post("/login",async (req: Request, res: Response) => {

// });

UserRouter.get('/items/:id', async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserController.findOne(req.params.id);
  res.status(200).json(user);
});
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
