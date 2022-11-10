export type BloodType = "A" | "B" | "AB" | "O";
export type Gender = "male" | "female";

export type HashtagType =
  | "bloodtype"
  | "country"
  | "city"
  | "district"
  | "gender"
  | "birth"
  | "mbti"
  | "free";

export interface Mbti {
  date: number;
  IE: number;
  NS: number;
  TF: number;
  JP: number;
}

export interface Option {
  index: number;
  name: string;
}
