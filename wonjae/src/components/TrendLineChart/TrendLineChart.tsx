import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week -6",
    "E/I": 4000,
    "S/N": 2400,
    "T/F": 2400,
    "J/P": 3876,
  },
  {
    name: "Week -5",
    "E/I": 3000,
    "S/N": 1398,
    "T/F": 2210,
    "J/P": 4605,
  },
  {
    name: "Week -4",
    "E/I": 2000,
    "S/N": 9800,
    "T/F": 2290,
    "J/P": 1542,
  },
  {
    name: "Week -3",
    "E/I": 2780,
    "S/N": 3908,
    "T/F": 2000,
    "J/P": 2587,
  },
  {
    name: "Week -2",
    "E/I": 1890,
    "S/N": 4800,
    "T/F": 2181,
    "J/P": 3454,
  },
  {
    name: "Week -1",
    "E/I": 2390,
    "S/N": 3800,
    "T/F": 2500,
    "J/P": 2345,
  },
  {
    name: "Week 0",
    "E/I": 3490,
    "S/N": 4300,
    "T/F": 2100,
    "J/P": 1234,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="E/I"
            stroke="#9F7DE1CC"
            activeDot={{ r: 1 }}
          />
          <Line type="monotone" dataKey="S/N" stroke="#9F7DE1FF" />
          <Line type="monotone" dataKey="T/F" stroke="#AD00FFFF" />
          <Line type="monotone" dataKey="J/P" stroke="#000000FF" />
          {/* <Line type="monotone" dataKey="J/P" stroke="#000000FF" /> */}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
