import BettingResult from "./components/BettingResult/BettingResult";
import BettingResultPast from "./components/BettingResultPast/BettingResultPast";
import Betting from "./components/Betting/Betting";
import BettingPopup from "./components/BettingPopup/BettingPopup";
import MockBettingResult from "./mock_data/mock_gambles.json";
import MockUser from "./mock_data/mock_users.json";
import RemainedBalance from "./components/RemainedBalance/RemainedBalance";
// import BloodType from "./components/type/common";

const DUMMY_DATA_BETTING_RESULT = {
  ...MockBettingResult,
};
const DUMMY_DATA_BETTING_RESULT_NOT_END = {
  ...MockBettingResult,
  openTime: Date.now(),
  closeTime: Date.now() + 100000000,
  result: -1,
};
const DUMMY_DATA_BETTING_RESULT_NOT_CHECK = {
  ...MockBettingResult,
  // openTime: Date.now(),
  // closeTime: Date.now() + 1000000,
  result: -1,
};
const DUMMY_DATA_BETTING_RESULT_CHECK = {
  ...MockBettingResult,
  // openTime: Date.now(),
  // closeTime: Date.now() + 1000000,
  result: 0,
};

const DUMMY_DATA_USER_BETTING_RESULT = {
  choose: -1,
  bettingCoin: 2500,
};

const DUMMY_DATA_USER = {
  ...MockUser[0],
  bloodType: "A" as BloodType,
  gender: "m" as Gender,
};

const App = () => {
  return (
    <div>
      <div>
        <RemainedBalance data={DUMMY_DATA_USER} />
      </div>
      <div>
        <Betting data={DUMMY_DATA_BETTING_RESULT} />
      </div>
      <div>
        <BettingPopup data={DUMMY_DATA_BETTING_RESULT} />
      </div>
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
export default App;
