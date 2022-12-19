import { Gamble } from "../../../common/type/Gamble";

export const CalcDividend = (gamble: Gamble, index: number) => {
  let bal = gamble["betState"][index]["balance"];
  let oppBal = gamble["betState"][1 - index]["balance"];
  return Math.round(((bal + oppBal) / bal) * 100) / 100;
};

export const GetNewId = async (model: any, id: string) => {
  let maxId = Math.max(
    ...(await model.find().lean()).map((e: any) => {
      return +e[id];
    })
  );
  console.log(maxId);
  return maxId + 1;
};
