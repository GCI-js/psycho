import { BloodType, Mbti } from "./common";

export interface User {
  nickname: string;
  mbtis: Mbti[];
  bloodType: BloodType;
  country: string;
  city: string;
  district: string;
  gender: "male" | "female" | "";
  birth: number;
}
