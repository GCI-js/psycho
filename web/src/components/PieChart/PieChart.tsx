import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
import HashTagType from "../../../../../common/type/Hashtag";

const COLORS = ["#454BA1", "#7E3972", "#E94036", "#F9B5A2"]; // 피그마에 있는 mbti 별 색상값
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
/**
 *
 * @param cl
 * @returns
 */
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

/**
 * PieChart 에 입력시킬 데이터 인터페이스
 */
interface PieChartProps {
  data: HashTagType.Hashtag;
}

/**
 *  PieChartProps 를 입력으로 받아서 pie chart 를 렌더링하는 함수
 */
export default class Example extends PureComponent<PieChartProps> {
  render() {
    var data = this.props.data;
    /**
     * 더미 데이터,
     * {name, value} 형태의 dictionary 로 이루어진 array 를 데이터로 구성하여 렌더링하면 파이차트를 그릴 수 있음.
     */
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
      // 고정 크기 지정, 상위 컴포넌트를 감싸주면 크기 변경 가능 (ResponsiveContainer 등 사용 가능)
      <div>
        <PieChart width={345} height={300}>
          <Pie
            data={pieData} // 위에서 선언하거나 받아온 pie data 를 입력
            cx="50%" // x y 축 크기 지정
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel} // 라벨을 커스텀할 수 있음
            innerRadius={80} // 안쪽 반지름
            outerRadius={160} // 바깥쪽 반지름
            fill="#8884d8" // 배경 색상
            dataKey="value" // 데이터에서 portion 을 갖게할 키값을 지정
            startAngle={90} // degree from x-axis, 시작 각도 지정
            endAngle={450} // 끝나는 각도 지정.  endAngle-startAngle = 360 일 경우 온전한 파이 그래프
          >
            {pieData.map((entry, index) => (
              <Cell // 각 셀 별 색상 지정
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  }
}
