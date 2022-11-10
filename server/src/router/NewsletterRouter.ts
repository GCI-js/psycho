import express, { Request, Response } from "express";
import { NewsletterController } from "../database/controller/NewsletterController";

export const NewsletterRouter = express.Router();

NewsletterRouter.post("/", async (req: Request, res: Response) => {
  let newsletterId: string = (
    (await NewsletterController.getNewsletterNum()) + 1
  ).toString();
});

// 상진이랑 뉴스레터 api 디자인부터 하면 됨!
