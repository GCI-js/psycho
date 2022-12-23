import * as React from "react";
import "./MyBettingRecord.css";

export type bettingHistType = {
  bettingId: number;
  index: number;
  balance: number;
  result: number;
};
export const bettingHistList: bettingHistType[] = [
  {
    bettingId: 1,
    index: 0,
    balance: 1200,
    result: -1,
  },
  {
    bettingId: 1,
    index: 0,
    balance: 1200,
    result: -1,
  },
  {
    bettingId: 1,
    index: 0,
    balance: 1200,
    result: 1,
  },
];

const MyBettingRecord = () => {
  var day = bettingHistList.length;
  var win = 0;
  var loose = 0;
  var money = 0;
  for (var i = 0; i < bettingHistList.length; i++) {
    if (bettingHistList[i].result === 1) {
      win++;
      money += bettingHistList[i].balance;
    } else if (bettingHistList[i].result === -1) {
      loose++;
      money -= bettingHistList[i].balance;
    }
  }
  return (
    <div>
      <div className="card_mybat">
        <div className="card_mybat_header">나의 베팅 기록</div>
        <div className="card_mybat_contents">
          <div>
            지난 {day}일 동안 {win}번 이기셨고, {loose}번 패배하셨어요!
          </div>
          총 승률은 {Math.round((win * 100) / day)}% 에요! 지금까지 {money} MBTI
          포인트를 사용하셨어요!
        </div>
      </div>
    </div>
  );
};

export default MyBettingRecord;

<style scoped></style>;
