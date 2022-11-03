function fixDecimalPrecision(decimal: number, precision: number) {
  return decimal.toFixed(precision);
}
export const BettingUtils = {
  convertUTCtoDate: (date: number) => {
    var year = new Date(date).getUTCFullYear();
    var month = new Date(date).getUTCMonth() + 1;
    var date = new Date(date).getUTCDate();
    var currentDate = month.toString() + "월" + date.toString() + "일";

    return currentDate;
  },

  calcVoteRatio: (userCnt0: number, userCnt1: number) => {
    var voteRatio0 = (userCnt0 / (userCnt0 + userCnt1)) * 100.0;
    var voteRatio1 = 100 - voteRatio0;

    return { voteRatio0, voteRatio1 };
  },

  calcDividend: (balance0: number, balance1: number) => {
    var sum = balance0 + balance1;
    var v0 = sum / balance0;
    var v1 = sum / balance1;
    var value0 = fixDecimalPrecision(v0, 2);
    var value1 = fixDecimalPrecision(v1, 2);
    return { value0, value1 };
  },

  numberWithCommas: (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  about: () => {
    return "Betting/utils";
  },
};
