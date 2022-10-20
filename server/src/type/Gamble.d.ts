import { Document } from "mongoose";

declare interface Gamble {
  _id?: string;
  gambleId: string;
  surveyId: string;
  openTime: number;
  closeTime: number;
  title: string;
  contents: {
    main: string;
    options: Option[];
  };
  betState: {
    index: number;
    name: string;
    userCnt: number;
    balance: number;
    dividend: number; //배당률
  }[];
  result: number; // one of index. answer. should not be transferred until due.
}
