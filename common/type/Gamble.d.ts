export interface Gamble {
  _id?: string;
  gambleId: string;
  surveyId: string;
  openTime: number;
  closeTime: number;
  title: string;
  contents: {
    main: string;
    options: Option[];
  };
  betState: {
    index: number;
    name: string;
    userCnt: number;
    balance: number;
    dividend: number; //배당률
  }[];
  result: {
    index: number;
    rate: number;
  }[];
  answerIndex: number; // one of index. answer. should not be transferred until due.
}
