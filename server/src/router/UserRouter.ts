import express, { NextFunction, Request, Response } from 'express';
import { UserController } from '../database/controller/UserController';

export const UserRouter = express.Router();

UserRouter.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  const userList = await UserController.findAllUsers();
  res.status(200).json(userList);
})