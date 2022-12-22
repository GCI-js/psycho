import express from "express";
import { UserController } from "../database/controller/UserController";
export const UserRouter = express.Router();

UserRouter.post("/", UserController.createUser);
UserRouter.get("/items", UserController.readUsers);
UserRouter.put("/items/:userId", UserController.updateUser);
UserRouter.delete("/items/:userId", UserController.deleteUser);
UserRouter.get("/count", UserController.readUserCount);
UserRouter.post("/auth/google", UserController.authGoogle);
// UserRouter.post("/auth/google/refresh",UserController.authGoogle);
