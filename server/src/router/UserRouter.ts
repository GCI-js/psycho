import express, { NextFunction, Request, Response } from "express";
import { UserController } from "../database/controller/UserController";

export const UserRouter = express.Router();

UserRouter.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  const userList = await UserController.findAllUsers();
  res.status(200).json(userList);
});

UserRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserController.findUserById(req.params.id);
  res.status(200).json(user);
});
UserRouter.get('/:id/recent_response', async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserController.findUserById(req.params.id);
  user?.recentResponse
  res.status(200).json(  user?.recentResponse    );
});
UserRouter.get('/:id/balance', async (req: Request, res: Response, next: NextFunction) => {
  const user = await UserController.findUserById(req.params.id);
  user?.recentResponse
  res.status(200).json(  user?.balance    );
})
