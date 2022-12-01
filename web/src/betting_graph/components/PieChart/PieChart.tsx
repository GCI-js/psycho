import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import HashTagType from "../../../../../common/type/Hashtag";

const COLORS = ["#454BA1", "#7E3972", "#E94036", "#F9B5A2"];
const RADIAN = Math.PI / 180;
interface customLabel {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  payload: any;
}
const renderCustomizedLabel = (cl: customLabel) => {
  const radius = cl.innerRadius + (cl.outerRadius - cl.innerRadius) * 0.5;
  const x = cl.cx + radius * Math.cos(-cl.midAngle * RADIAN);
  const y = cl.cy + radius * Math.sin(-cl.midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cl.cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {cl.payload.name}
      </text>
      <text
        x={x}
        y={y + 15}
        fill="white"
        textAnchor={x > cl.cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(cl.percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};
const style = {
  top: "100%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

interface PieChartDataItem {
  name: string;
  value: number;
}

interface PieChartProps {
  // data: PieChartDataItem[];
  data: HashTagType.Hashtag;
}

export default class Example extends PureComponent<PieChartProps> {
  render() {
    var data = this.props.data;
    var pieData = [
      {
        name: "IIII",
        value: data.mbtiCnt[0] + 65,
      },
      {
        name: "EEE",
        value: data.mbtiCnt[0] + 12,
      },
      {
        name: "NNNN",
        value: data.mbtiCnt[0] + 8,
      },
      {
        name: "TTTT",
        value: data.mbtiCnt[0] + 5,
      },
    ];

    console.log(pieData);
    return (
      // <ResponsiveContainer width="100%" height="100%">
      <div>
        <PieChart width={345} height={300}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            innerRadius={80}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
            // label
            startAngle={90} // degree from x-axis
            endAngle={450}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Legend iconSize={10} layout="horizontal" wrapperStyle={style} /> */}
        </PieChart>
      </div>
      // </ResponsiveContainer>
    );
  }
}
