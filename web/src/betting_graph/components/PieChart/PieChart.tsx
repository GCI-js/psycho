import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#9F7DE1CC", "#9F7DE1FF", "#AD00FFFF", "#000000FF"];

const RADIAN = Math.PI / 180;
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
  data: PieChartDataItem[];
}

export default class Example extends PureComponent<PieChartProps> {
  render() {
    var data = this.props.data;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend iconSize={10} layout="horizontal" wrapperStyle={style} />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
