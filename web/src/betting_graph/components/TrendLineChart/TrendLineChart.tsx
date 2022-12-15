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
import "./TrendLineChart.css";

const data = [
  {
    name: "Week -6",
    "E/I": 40.0,
    "N/S": 24.0,
    "F/T": 24.0,
    "J/P": 38.76,
  },
  {
    name: "Week -5",
    "E/I": 30.0,
    "N/S": 13.98,
    "F/T": 22.1,
    "J/P": 46.05,
  },
  {
    name: "Week -4",
    "E/I": 20.0,
    "N/S": 98.0,
    "F/T": 22.9,
    "J/P": 15.42,
  },
  {
    name: "Week -3",
    "E/I": 27.8,
    "N/S": 39.08,
    "F/T": 20.0,
    "J/P": 25.87,
  },
  {
    name: "Week -2",
    "E/I": 18.9,
    "N/S": 48.0,
    "F/T": 21.81,
    "J/P": 34.54,
  },
  {
    name: "Week -1",
    "E/I": 23.9,
    "N/S": 38.0,
    "F/T": 25.0,
    "J/P": 23.45,
  },
  {
    name: "Week 0",
    "E/I": 34.9,
    "N/S": 43.0,
    "F/T": 21.0,
    "J/P": 12.34,
  },
];
const TrendLineChart = () => {
  const lineType = "linear";
  const [lineStroke, setLineStroke] = useState({
    "E/I": 0,
    "N/S": 0,
    "F/T": 0,
    "J/P": 0,
  });
  const [currentSelectedLine, setCurrentSeletctedLine] = useState("");
  const [percent, setPercent] = useState(0);

  const lineClickHandler = (line: any, e: CurveProps) => {
    var newLineStoke = { "E/I": 0, "N/S": 0, "F/T": 0, "J/P": 0 };
    if (line == "E/I") {
      newLineStoke["E/I"] = 5;
    } else if (line == "N/S") {
      newLineStoke["N/S"] = 5;
    } else if (line == "F/T") {
      newLineStoke["F/T"] = 5;
    } else if (line == "J/P") {
      newLineStoke["J/P"] = 5;
    }
    setLineStroke({ ...newLineStoke });
    setCurrentSeletctedLine(line);
  };
  console.log(lineStroke);
  console.log(currentSelectedLine);
  const COLORS = ["#9F7DE1CC", "#AD00FFFF", "#AD00FFFF", "#000000FF"];
  const renderCusomizedLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="customized-legend" style={{ textAlign: "center" }}>
        {payload.map((entry: any) => {
          const { dataKey, color } = entry;
          let style = { margin: 10 };
          return (
            <span className="legend-item" style={style}>
              <Surface width={10} height={10}>
                <Symbols cx={5} cy={5} type="circle" size={50} fill={color} />
              </Surface>
              <span>{dataKey}</span>
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
          <div className="Row">
            <div className="TrendLineChartTitleColumn">MBTI 변화추이</div>
          </div>
          <div className="Row">
            <div
              className="TrendLineChartTitleColumn"
              style={{ color: "#94B3A3" }}
            >
              1D 1W 1M 3M 6M 1Y All
            </div>
          </div>
          <div className="TrendLineChartTitleColumn">
            +{currentSelectedLine.charAt(0)} {percent}%
          </div>
        </div>
      </div>
      <LineChart
        width={375}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" /> */}
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}

        {/* <Legend content={renderLegend} /> */}
        <Legend
          content={renderCusomizedLegend}
          // payload={data.map((item: any, index: any) => ({
          //   id: index,
          //   type: "circle",
          //   value: `${item.name} (${item.value})`,
          //   color: COLORS[index % COLORS.length],
          // }))}
        />
        <ReferenceLine y={50} label="" stroke="black" />
        <Line
          type={lineType}
          dataKey="E/I"
          stroke={COLORS[0]}
          // activeDot={{ r: 10.1 }}
          strokeWidth={1 + lineStroke["E/I"]}
          dot={false}
          onClick={(e) => {
            lineClickHandler("E/I", e);
          }}
        />
        <Line
          type={lineType}
          dataKey="N/S"
          stroke={COLORS[1]}
          strokeWidth={1 + lineStroke["N/S"]}
          dot={false}
          onClick={(e) => {
            lineClickHandler("N/S", e);
          }}
        />
        <Line
          type={lineType}
          dataKey="F/T"
          stroke={COLORS[2]}
          strokeWidth={1 + lineStroke["F/T"]}
          dot={false}
          onClick={(e) => {
            lineClickHandler("F/T", e);
          }}
        />
        <Line
          type={lineType}
          dataKey="J/P"
          stroke={COLORS[3]}
          strokeWidth={1 + lineStroke["J/P"]}
          dot={false}
          onClick={(e) => {
            lineClickHandler("J/P", e);
          }}
        />
        {/* <Line type="monotone" dataKey="J/P" stroke="#000000FF" /> */}
      </LineChart>
    </div>
  );
};

export default TrendLineChart;
