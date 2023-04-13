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
  date: string;
  EI: number;
  NS: number;
  FT: number;
  JP: number;
}

export interface Option {
  index: number;
  name: string;
}
