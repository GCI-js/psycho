import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";
import * as echarts from "echarts";
import "./MbtiHistogram.css";

/*
[2022.01.12 jongseok lee] 
MBTI Histogram은 MBTI 변화 추이를 EChart로 그리는 component입니다. 영훈 화가님이 그려온 그림으로 대체하면 됩니다. 
만약에 화가님 그림이 더 좋을 경우 컴포넌트 전체 날려버리세요. 구조 파악을 위해 코드는 남겨둡니다.
*/
export const MBTIHistogram: React.FC = () => {
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
    <div className="histogramContainer">
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
