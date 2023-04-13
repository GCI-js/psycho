export interface Question {
  context: string;
  factor: "EI" | "NS" | "FT" | "JP";
  value: -5 | 5;
}
