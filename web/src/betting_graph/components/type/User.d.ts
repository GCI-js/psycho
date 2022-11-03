import { Document } from "mongoose";

declare interface User {
  _id?: string;
  userId: string;
  nickname: string;
  kakaoKey: {
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiration: number;
  };
  googleKey: {
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiration: number;
  };
  naverKey: {
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiration: number;
  };
  bloodType: BloodType;
  country: string;
  city: string;
  district: string;
  gender: Gender;
  birth: number;
  mbtis: Mbti[];
  hashtags: Hashtag[];
  recentResponse: boolean[];
  balance: number;
  gambleHist: {
    gambleId: string;
    index: number; //선택지 index
    balance: number; //배팅금액
    result: number; // -1: not yet determined, 0: lose, 1: win
  }[];
  connHist: number[];
  lastConn: number;
  contConn: number;
}
