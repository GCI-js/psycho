import { HashtagType } from "./common";

export interface Hashtag {
  _id?: string;
  hashtagId: string;
  name: string;
  type?: HashtagType;
  mbtiCnt?: number[];
}
