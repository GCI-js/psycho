import express from "express";
import { NewsletterController } from "../database/controller/NewsletterController";

export const NewsletterRouter = express.Router();

NewsletterRouter.post("/", NewsletterController.createNewsletter);
NewsletterRouter.get("/items", NewsletterController.readNewsletters);
NewsletterRouter.put(
  "/items/:newsletterId",
  NewsletterController.updateNewsletter
);
NewsletterRouter.delete(
  "/items/:newsletterId",
  NewsletterController.deleteNewsletter
);
