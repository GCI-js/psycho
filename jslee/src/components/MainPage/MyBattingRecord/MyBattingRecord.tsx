import * as React from "react";
import "./MyBattingRecord.css";

export type gambleHistType = {
  gambleId: number;
  index: number;
  balance: number;
  result: number;
};
export const gambleHistList: gambleHistType[] = [
  {
    gambleId: 1,
    index: 0,
    balance: 1200,
    result: -1,
  },
  {
    gambleId: 1,
    index: 0,
    balance: 1200,
    result: -1,
  },
  {
    gambleId: 1,
    index: 0,
    balance: 1200,
    result: 1,
  },
];

const MyBattingRecord = () => {
  var day = gambleHistList.length;
  var win = 0;
  var loose = 0;
  var money = 0;
  for (var i = 0; i < gambleHistList.length; i++) {
    if (gambleHistList[i].result === 1) {
      win++;
      money += gambleHistList[i].balance;
    } else if (gambleHistList[i].result === -1) {
      loose++;
      money -= gambleHistList[i].balance;
    }
  }
  return (
    <div>
      <div className="card_mybat">
        <div className="card_my_bat_header">나의 베팅 기록</div>
        <div>
          지난 {day}일 동안 {win}번 이기셨고, {loose}번 패배하셨어요! 총 승률은
          {Math.round((win * 100) / day)}% 에요! 지금까지 {money} MBTI 포인트를
          사용하셨어요!
        </div>
      </div>
    </div>
  );
};

export default MyBattingRecord;

<style scoped></style>;
