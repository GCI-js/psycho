import React from "react";
import "./Betting.css";
const Betting = () => {
  let dummyBettingData = {
    date: "9",
    winCount: "3",
    loseCount: "5",
    winRate: "38",
    point: "38",
  };
  return (
    <div className="bettingContainer">
      <text className="bettingTitle">나의 도박 기록</text>
      <text className="bettingContent">{`지난 ${dummyBettingData.date}일 동안 ${dummyBettingData.winCount}번 이기셨고, ${dummyBettingData.loseCount}번 패배하셨어요! 총 승률은 ${dummyBettingData.winRate}% 에요! 지금까지 ${dummyBettingData.point}포인트를 사용하셨어요!`}</text>
    </div>
  );
};

export default Betting;
