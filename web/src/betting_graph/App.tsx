import * as React from "react";

import BettingResult from "./components/BettingResult/BettingResult";
import BettingResultPast from "./components/BettingResultPast/BettingResultPast";
import Betting from "./components/Betting/Betting";
import BettingPopup from "./components/BettingPopup/BettingPopup";
import MockBettingResult from "../../../common/mock_data/mock_bettings.json";
import MockUser from "../../../common/mock_data/mock_users.json";
import MockHashTags from "../../../common/mock_data/mock_hashtags.json";
import RemainedBalance from "./components/RemainedBalance/RemainedBalance";
import {
  BloodType,
  Gender,
  HashtagType,
  Mbti,
} from "../../../common/type/common";
import { User } from "../../../common/type/User";
import PieChart from "./components/PieChart/PieChart";
import TrendLineChart from "./components/TrendLineChart/TrendLineChart";
import QuestionPage from "./components/QuestionPage/QuestionPage";

const DUMMY_DATA_BETTING_RESULT = {
  ...MockBettingResult[0],
};
const DUMMY_DATA_BETTING_RESULT_NOT_END = {
  ...MockBettingResult[0],
  openTime: Date.now(),
  closeTime: Date.now() + 100000000,
};
const DUMMY_DATA_BETTING_RESULT_NOT_CHECK = {
  ...MockBettingResult[0],
  // openTime: Date.now(),
  // closeTime: Date.now() + 1000000,
};
const DUMMY_DATA_BETTING_RESULT_CHECK = {
  ...MockBettingResult[0],
  // openTime: Date.now(),
  // closeTime: Date.now() + 1000000,
};

const DUMMY_DATA_USER_BETTING_RESULT = {
  choose: -1,
  bettingCoin: 2500,
};

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
      <div>
        <RemainedBalance data={DUMMY_DATA_USER} />
      </div>
      <div>
        <Betting data={DUMMY_DATA_BETTING_RESULT} />
      </div>
      {/* <div>
        <BettingPopup data={DUMMY_DATA_BETTING_RESULT} />
      </div> */}
      <div>
        <BettingResult
          data={[DUMMY_DATA_BETTING_RESULT_NOT_END, DUMMY_DATA_BETTING_RESULT]}
          userData={DUMMY_DATA_USER_BETTING_RESULT}
        />
      </div>
      <div>
        <BettingResultPast
          data={DUMMY_DATA_BETTING_RESULT_NOT_CHECK}
          userData={DUMMY_DATA_USER_BETTING_RESULT}
        />
      </div>
      <div>
        <BettingResultPast
          data={DUMMY_DATA_BETTING_RESULT_CHECK}
          userData={DUMMY_DATA_USER_BETTING_RESULT}
        />
      </div>
    </div>
  );
};
export default BettingGraph;
