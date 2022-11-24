import { Gamble } from "../../../common/type/Gamble";

export const CalcDividend = (gamble: Gamble, index: number) => {
  let bal = gamble["betState"][index]["balance"];
  let oppBal = gamble["betState"][1 - index]["balance"];
  return Math.round(((bal + oppBal) / bal) * 100) / 100;
};
