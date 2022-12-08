import { BloodType, Mbti } from "./common";
import { Hashtag } from "./Hashtag";

export interface User {
  _id?: string;
  userId: string;
  nickname: string;
  kakaoKey: {
    tokenType?: string;
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
  gender: "male" | "female";
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
  connHist: number[];//이번주 출석 현황 월~일
  lastConn: number;//마지막 점속 날짜
  contConn: number;//연속 출석일수
}
