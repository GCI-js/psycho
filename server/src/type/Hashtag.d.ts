import { Document } from "mongoose";

declare interface Hashtag {
  _id?: string;
  hashtagId: string;
  name: string;
  type?:
    | "bloodtype"
    | "country"
    | "city"
    | "district"
    | "gender"
    | "birth"
    | "mbti"
    | "free";
  mbtiCnt: number[];
}
