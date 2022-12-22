import { Betting } from "../../../common/type/Betting";

export const CalcDividend = (betting: Betting, index: number) => {
  let bal = betting["betState"][index]["balance"];
  let oppBal = betting["betState"][1 - index]["balance"];
  return Math.round(((bal + oppBal) / bal) * 100) / 100;
};

export const GetNewId = async (model: any, id: string) => {
  let maxId = Math.max(
    ...(await model.find().lean()).map((e: any) => {
      return +e[id];
    })
  );
  console.log(`New id = ${maxId}`);
  return (maxId + 1).toString();
};
