import { NextFunction, Request, Response } from "express";
import { apiKey } from "../../credentials/password";

export const CheckApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers["gci-api-key"]?.toString() != apiKey)
    throw Error("Authentication Error!");
  next();
};
