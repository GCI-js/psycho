import { Mbti } from "../@types/common";

interface MBTIState {
  MBTI: string;
  state: boolean;
}

export const MBTIValueToState = (mbti: Mbti) => {
  let mbtiState = [
    { MBTI: "E", state: mbti.EI < 50 ? true : false },
    { MBTI: "N", state: mbti.NS < 50 ? true : false },
    { MBTI: "F", state: mbti.FT < 50 ? true : false },
    { MBTI: "J", state: mbti.JP < 50 ? true : false },
    { MBTI: "I", state: mbti.EI > 50 ? true : false },
    { MBTI: "S", state: mbti.NS > 50 ? true : false },
    { MBTI: "T", state: mbti.FT > 50 ? true : false },
    { MBTI: "P", state: mbti.JP > 50 ? true : false },
  ];
  return mbtiState;
};

export const MBTIStateToValue = (mbti: MBTIState[]) => {
  let mbtiValue: Mbti = {
    date: new Date().toLocaleDateString(),
    EI: mbti[0].state == true ? 25 : 75,
    NS: mbti[1].state == true ? 25 : 75,
    FT: mbti[2].state == true ? 25 : 75,
    JP: mbti[3].state == true ? 25 : 75,
  };
  return mbtiValue;
};
