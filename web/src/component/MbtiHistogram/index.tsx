import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";
import SettingPage from "../SettingPage";
import { Mbti } from "../../@types/common";
import TrendLineChart from "../TrendLineChart";
/*
[2022.01.12 jongseok lee] 
MBTI Histogram은 MBTI 변화 추이를 EChart로 그리는 component입니다. 영훈 화가님이 그려온 그림으로 대체하면 됩니다. 
만약에 화가님 그림이 더 좋을 경우 컴포넌트 전체 날려버리세요. 구조 파악을 위해 코드는 남겨둡니다.
*/
export const MBTIHistogram: React.FC = (properties: Properties) => {
  const id = [`_${idiotproof.trace(MBTIHistogram)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  return (
    <div id={id} className={cl}>
      <div className="histogramContainer">
        <div className="histogram-title">MBTI 변화 추이</div>
        <div className="histogram-weekly">weekly</div>
        {/* <ECharts
          option={options}
          theme="myTheme"
          opts={{ renderer: "svg", width: "auto", height: "auto" }}
        /> */}
        <div className="chart-wrap">
          <TrendLineChart></TrendLineChart>
        </div>
      </div>
    </div>
  );
};

export default MBTIHistogram;
