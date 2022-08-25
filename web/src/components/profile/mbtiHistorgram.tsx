import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";
import * as echarts from "echarts";
import "./mbtiHistogram.css";

const MBTIHistogram = () => {
	const [options, setOptions] = useState({
		color: ["#8deb40", "#006699", "#4cabce", "#e5323e"],
		dataset: {
			source: [
				["type", "Jan", "Feb", "Mar", "Apr", "May"],
				["E/I", 80, 40, 90, 60, 50],
				["S/N", 70, 30, 90, 70, 70],
				["T/F", 60, 90, 70, 50, 20],
				["P/J", 50, 80, 60, 95, 85],
			],
		},
		legend: { bottom: "5%" },
		xAxis: {
			type: "category",
			axisTick: {
				show: false,
			},
		},
		grid: {
			show: false,
		},
		yAxis: { show: false },
		series: [
			{
				type: "line",
				seriesLayoutBy: "row",
			},
			{
				type: "line",
				seriesLayoutBy: "row",
			},
			{
				type: "line",
				seriesLayoutBy: "row",
			},
			{
				type: "line",
				seriesLayoutBy: "row",
			},
		],
	});

	return (
		<div className="container">
			<text>MBTI 변화 추이</text>
			<text>weekly</text>
			<ECharts
				option={options}
				theme="myTheme"
				opts={{ renderer: "svg", width: "auto", height: "auto" }}
			/>
		</div>
	);
};

export default MBTIHistogram;
