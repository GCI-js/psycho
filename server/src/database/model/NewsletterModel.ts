import { model, Schema } from "mongoose";
import { Newsletter } from "../../../../common/type/Newsletter";

export const DOCUMENT_NAME = "Newsletter";
export const COLLECTION_NAME = "newsletters";

const newsletterSchema = new Schema(
  {
    newsletterId: { type: String, required: true },
    thumbnail: { type: String, required: false },
    title: { type: String, required: false },
    hashtags: [
      {
        hashtagId: { type: String, required: false },
        name: { type: String, required: false },
      },
    ],
    url: { type: String, required: false },
    writer: { type: String, required: false },
  },
  { versionKey: false }
);

export const NewsletterModel = model<Newsletter>(
  DOCUMENT_NAME,
  newsletterSchema,
  COLLECTION_NAME
);
