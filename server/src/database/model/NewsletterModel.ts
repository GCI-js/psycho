import { model, Schema } from 'mongoose';
import { Newsletter } from '../../type/Newsletter';

export const DOCUMENT_NAME = 'Newsletter';
export const COLLECTION_NAME = 'newsletters';

const newsletterSchema = new Schema({
  newsletter_id: { type: String, required: true },
  thumbnail: { type: String, required: false },
  title: { type: String, required: false },
  hashtags: [
    {
      hashtag_id: { type: String, required: false },
      name: { type: String, required: false }
    }
  ],
  url: { type: String, required: false },
  writer: { type: String, required: false },
});

export const NewsletterModel = model<Newsletter>(DOCUMENT_NAME, newsletterSchema, COLLECTION_NAME);