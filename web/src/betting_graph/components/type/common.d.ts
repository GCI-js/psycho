declare type BloodType = "A" | "B" | "AB" | "O";
declare type Gender = "male" | "female";

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
