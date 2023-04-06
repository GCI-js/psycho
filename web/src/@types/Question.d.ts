import { Option } from "./common";

export interface Question {
  _id?: string;
  questionId: string;
  surveyId?: string;
  image: string; // image url
  quote: string; // quote
  title: string;
  type: string; //"mbti" | "survey";
  date: number;
  contents: {
    main: string;
    options: Option[];
  };
  mbtiChange?: {
    factor: string; // "EI" | "NS" | "FT" | "JP";
    value: number;
  }[];
}

export interface QuestionList {
  question: string;
  factor: "EI" | "NS" | "FT" | "JP";
  value: -5 | 5;
}
