import React, { PureComponent } from "react";
import "./BettingResult.css";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import GambleType from "../../../../../common/type/Gamble";
import { BettingUtils } from "../Betting/utils";
import BettingContent from "../BettingContent/BettingContent";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface BettingResultProps {
  data: GambleType.Gamble[];
  userData: {
    bettingCoin: number;
    choose: number;
  };
}

export default class Example extends PureComponent<BettingResultProps> {
  render() {
    var data = this.props.data;
    return (
      <div className="root">
        {/* <div>
          <BettingContent data={data[0]} isLocked={true} />
        </div> */}
        <div>
          <BettingContent
            data={data[0]}
            // bettingTitle={currentDate + " 배당률"}
            // addtionalComponent={comp}
          />
        </div>
        <div>
          <BettingContent
            data={data[1]}
            // bettingTitle={null} //{currentDate + " 배당률"}
            // addtionalComponent={null}
          />
        </div>
      </div>
    );
  }
}
