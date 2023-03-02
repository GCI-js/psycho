import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";
import Setting from "../Setting";
import { Mbti } from "../../@types/common";
/*
[2022.01.12 jongseok lee] 
MBTI Histogram은 MBTI 변화 추이를 EChart로 그리는 component입니다. 영훈 화가님이 그려온 그림으로 대체하면 됩니다. 
만약에 화가님 그림이 더 좋을 경우 컴포넌트 전체 날려버리세요. 구조 파악을 위해 코드는 남겨둡니다.
*/
export const MBTIHistogram: React.FC = (properties: Properties) => {
  const id = [`_${idiotproof.trace(Setting)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  // if (!localStorage.getItem("Mbti")) {

  // }
  // const [mbtiData, setmbtiData] = useState({
  //     source: [
  //       ["type", "Jan", "Feb", "Mar", "Apr", "May"],
  //       ["E/I", 80, 40, 90, 60, 50],
  //       ["S/N", 70, 30, 90, 70, 70],
  //       ["T/F", 60, 90, 70, 50, 20],
  //       ["P/J", 50, 80, 60, 95, 85],
  //     ],
  //   })
  const [options, setOptions] = useState({
    color: ["#8deb40", "#006699", "#4cabce", "#e5323e"],
    dataset: {
      source: [
        ["type", "", " ", "  ", "   ", "    "],
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
  let copyArray = options;
  useEffect(() => {
    localStorage.setItem("E/I", "10,20,30,40,50");
    let EI = localStorage
      .getItem("E/I")
      .split(",")
      .map(function (item) {
        return parseInt(item, 10);
      });
    copyArray.dataset.source[1] = ["E/I", ...EI];
    console.log(copyArray);
    setOptions(copyArray);
  });
  return (
    <div id={id} className={cl}>
      <div className="histogramContainer">
        <div className="histogram-title">MBTI 변화 추이</div>
        <div className="histogram-weekly">weekly</div>
        <ECharts
          option={options}
          theme="myTheme"
          opts={{ renderer: "svg", width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default MBTIHistogram;
