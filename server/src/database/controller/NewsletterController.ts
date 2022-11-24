import { NewsletterModel } from "../model/NewsletterModel";

export const NewsletterController = {
  getNewsletterNum: async () => {
    let cnt = await NewsletterModel.count({});
    return cnt;
  },
};
