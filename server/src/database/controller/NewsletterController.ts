import { Newsletter } from "../../../../common/type/Newsletter";
import { Request, Response } from "express";
import { GetNewId } from "../../component/Util";
import { NewsletterModel } from "../model/NewsletterModel";

export const NewsletterController = {
  createNewsletter: async (req: Request, res: Response) => {
    console.log("createNewsletter");
    let newNewsletterId: string = await GetNewId(
      NewsletterModel,
      "newsletterId"
    );
    let newNewsletter: Newsletter = {
      newsletterId: newNewsletterId,
      thumbnail: req.body.thumbnail,
      title: req.body.title,
      hashtags: req.body.hashtags,
      url: req.body.url,
      writer: req.body.writer,
    };
    await NewsletterModel.create(newNewsletter);
    let filter = { newsletterId: newNewsletterId };
    res
      .status(200)
      .json(await NewsletterModel.findOne(filter).lean<Newsletter>());
  },
  readNewsletters: async (req: Request, res: Response) => {
    console.log("readNewsletters");
    res
      .status(200)
      .json(await NewsletterModel.find(req.query).lean<Newsletter[]>());
  },
  updateNewsletter: async (req: Request, res: Response) => {
    console.log("updateNewsletter");
    let filter = { newsletterId: req.params.newsletterId };
    await NewsletterModel.findOneAndUpdate(filter, req.body);
    res
      .status(200)
      .json(await NewsletterModel.findOne(filter).lean<Newsletter>());
  },
  deleteNewsletter: async (req: Request, res: Response) => {
    console.log("deleteNewsletter");
    let filter = { newsletterId: req.params.newsletterId };
    await NewsletterModel.findOneAndDelete(filter);
    res.status(200).json({});
  },
};
