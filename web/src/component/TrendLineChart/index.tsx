import { use } from "echarts";
import React, { PureComponent, useEffect, useState } from "react";
import { render } from "react-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  CurveProps,
  Surface,
  Symbols,
} from "recharts";
import "./index.module.scss";

const userData = JSON.parse(localStorage.getItem("userData"));
const userMbti = userData.mbtis.splice(0, 6).splice(0).reverse();

/**
 * 라인 차트를 그리는 함수
 * @returns
 */
const TrendLineChart = () => {
  const lineType = "linear";
  const [lineStroke, setLineStroke] = useState({
    EI: 0,
    NS: 0,
    FT: 0,
    JP: 0,
  });
  const [currentSelectedLine, setCurrentSeletctedLine] = useState("");
  const [percent, setPercent] = useState(0);

  const lineClickHandler = (line: any, e: CurveProps) => {
    var newLineStoke = { EI: 0, NS: 0, FT: 0, JP: 0 };
    if (line == "EI") {
      newLineStoke["EI"] = 5;
    } else if (line == "NS") {
      newLineStoke["NS"] = 5;
    } else if (line == "FT") {
      newLineStoke["FT"] = 5;
    } else if (line == "JP") {
      newLineStoke["JP"] = 5;
    }
    setLineStroke({ ...newLineStoke });
    setCurrentSeletctedLine(line);
  };
  console.log(lineStroke);
  console.log(currentSelectedLine);
  const COLORS = ["#9F7DE1CC", "#AD00FFFF", "#AD00FFFF", "#000000FF"];

  /**
   * legend 를 커스텀할 수 있는 함수
   * @param props
   * @returns
   */
  const renderCusomizedLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="customized-legend" style={{ textAlign: "center" }}>
        {payload.map((entry: any) => {
          const { dataKey, color } = entry;
          let style = { margin: 10 };
          console.log(String(dataKey));
          let dataKeySlash = dataKey.slice(0, 1) + "/" + dataKey.slice(1);
          return (
            <span className="legend-item" style={style}>
              <Surface width={10} height={10}>
                <Symbols cx={5} cy={5} type="circle" size={50} fill={color} />
              </Surface>
              <span>{dataKeySlash}</span>
            </span>
          );
        })}
      </div>
    );
  };
  return (
    <div style={{ backgroundColor: "#EAEAEA" }}>
      <div className="TrendLineChartTitle">
        <div className="Row">
          {/* <div className="Row">
            <div className="TrendLineChartTitleColumn">MBTI 변화추이</div>
          </div> */}
          {/* <div className="Row">
            <div  
              className="TrendLineChartTitleColumn"
              style={{ color: "#94B3A3" }}
            >
              1D 1W 1M 3M 6M 1Y All
            </div>      
          </div> */}
          {/* <div className="TrendLineChartTitleColumn">
            +{currentSelectedLine.charAt(0)} {percent}%
          </div> */}
        </div>
      </div>
      <div className="linechart-wrap">
        <LineChart // 라인 차트 컴포넌트
          width={346}
          height={100}
          data={userMbti}
          margin={{
            // top: 5,
            right: 28,
            left: 28,
            // bottom: 44,
          }}
        >
          <Tooltip />
          <Legend
            content={renderCusomizedLegend} // 커스텀  legend 렌더링
          />
          <ReferenceLine
            y={50}
            label=""
            stroke="black" // 중간선
          />
          <Line // 각 개별 line
            type={lineType}
            dataKey="EI"
            stroke={COLORS[0]}
            strokeWidth={1 + lineStroke["EI"]}
            dot={false}
            onClick={(e) => {
              lineClickHandler("EI", e);
            }}
          />
          <Line
            type={lineType}
            dataKey="NS"
            stroke={COLORS[1]}
            strokeWidth={1 + lineStroke["NS"]}
            dot={false}
            onClick={(e) => {
              lineClickHandler("NS", e);
            }}
          />
          <Line
            type={lineType}
            dataKey="FT"
            stroke={COLORS[2]}
            strokeWidth={1 + lineStroke["FT"]}
            dot={false}
            onClick={(e) => {
              lineClickHandler("FT", e);
            }}
          />
          <Line
            type={lineType}
            dataKey="JP"
            stroke={COLORS[3]}
            strokeWidth={1 + lineStroke["JP"]}
            dot={false}
            onClick={(e) => {
              lineClickHandler("JP", e);
            }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default TrendLineChart;
