import { Newsletter } from "../../../../common/type/Newsletter";
import { NewsletterModel } from "../model/NewsletterModel";

export const NewsletterController = {
  getNewId: async () => {
    let maxId = Math.max(
      ...(await NewsletterModel.find().lean()).map((e) => {
        return +e.newsletterId;
      })
    );
    console.log(maxId);
    return maxId + 1;
  },
};
