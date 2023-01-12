export interface Survey {
  _id?: string;
  surveyId: string;
  questionId: string;
  hashtags: Hashtag[];
  options: Option[];
  result: number[][];
  isOpen: Boolean;
}
