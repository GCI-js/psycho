import * as React from "react";

import MockUser from "../../../common/mock_data/mock_users.json";
import MockHashTags from "../../../common/mock_data/mock_hashtags.json";
import {
  BloodType,
  Gender,
  HashtagType,
  Mbti,
} from "../../../common/type/common";
import PieChart from "./components/PieChart/PieChart";
import TrendLineChart from "./components/TrendLineChart/TrendLineChart";
import QuestionPage from "./components/QuestionPage/QuestionPage";

const DUMMY_DATA_USER = {
  ...MockUser[0],
  bloodType: "A" as BloodType,
  gender: "male" as Gender,
};

const DUMMY_DATA_PIE_CHART = {
  ...MockHashTags[0],
  type: "free" as HashtagType,
};

const BettingGraph = () => {
  return (
    <div>
      <div>
        <QuestionPage />
      </div>
      <div>
        <TrendLineChart />
      </div>
      <div style={{ width: 375, height: 375 }}>
        <PieChart data={DUMMY_DATA_PIE_CHART} />
      </div>
    </div>
  );
};
export default BettingGraph;
