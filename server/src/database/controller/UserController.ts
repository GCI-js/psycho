import { UserModel } from "../model/UserModel";
import { User } from "../../../../common/type/User";
import { Request, Response } from "express";
import { GetNewId } from "../../component/Util";
import { OAuth2Client } from "google-auth-library";

export const UserController = {
  createUser: async (req: Request, res: Response) => {
    console.log("createUser");
    let newUserId: string = await GetNewId(UserModel, "userId");
    let newUser: User = {
      userId: newUserId,
      ...req.body,
      signUpStage: 0,
      recentResponse: [false, false, false, false, false, false, false],
      bettingHist: [],
      connHist: [0, 0, 0, 0, 0, 0, 0],
      lastConn: 0,
      contConn: 1,
    };
    await UserModel.create(newUser);
    let filter = { uesrId: newUserId };
    res.status(200).json(await UserModel.findOne(filter).lean<User>());
  },
  readUsers: async (req: Request, res: Response) => {
    console.log("readUsers");
    res.status(200).json(await UserModel.find(req.query).lean<User[]>());
  },
  updateUser: async (req: Request, res: Response) => {
    console.log("updateUser");
    let filter = { userId: req.params.userId };
    await UserModel.findOneAndUpdate(filter, req.body);
    res.status(200).json(await UserModel.findOne(filter).lean<User>());
  },
  deleteUser: async (req: Request, res: Response) => {
    console.log("deleteUser");
    let filter = { userId: req.params.userId };
    await UserModel.findOneAndDelete(filter);
    res.status(200).json({});
  },
  readUserCount: async (req: Request, res: Response) => {
    console.log("readUserCount");
    res.status(200).json(await UserModel.count({}));
  },
  authGoogle: async (req: Request, res: Response) => {
    const oAuth2Client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "postmessage"
    );
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
    console.log(tokens);

    res.json(tokens);
  },
  // authGoogleRefresh:async(req:Request,res:Response)=>{
  //   const user = new UserRefreshClient(
  //     clientId,
  //     clientSecret,
  //     req.body.refreshToken,
  //   );
  //   const { credentials } = await user.refreshAccessToken(); // optain new tokens
  //   res.json(credentials);
  //},
};
