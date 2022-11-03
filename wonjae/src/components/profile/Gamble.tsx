import React from "react";
import "./Gamble.css";
const Gamble = () => {
	let dummyGambleData = {
		date: "9",
		winCount: "3",
		loseCount: "5",
		winRate: "38",
		point: "38",
	};
	return (
		<div className="gambleContainer">
			<text className="title">나의 도박 기록</text>
			<text className="gambleContent">{`지난 ${dummyGambleData.date}일 동안 ${dummyGambleData.winCount}번 이기셨고, ${dummyGambleData.loseCount}번 패배하셨어요! 총 승률은 ${dummyGambleData.winRate}% 에요! 지금까지 ${dummyGambleData.point}포인트를 사용하셨어요!`}</text>
		</div>
	);
};

export default Gamble;
