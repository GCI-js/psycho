declare type BloodType = "A" | "B" | "AB" | "O";

declare type HashtagType =
  | "bloodtype"
  | "country"
  | "city"
  | "district"
  | "gender"
  | "birth"
  | "mbti"
  | "free";

declare interface Mbti {
  date: number;
  EI: number;
  NS: number;
  FP: number;
  JP: number;
}

declare interface Option {
  index: number;
  name: string;
}
