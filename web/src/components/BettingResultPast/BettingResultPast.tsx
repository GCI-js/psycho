import React, { PureComponent } from "react";
import "./BettingResultPast.css";
import GambleType from "../../../../server/src/type/Gamble";
import { BettingUtils } from "../Betting/utils";
import BettingContent from "../BettingContent/BettingContent";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface BettingResultPastProps {
  // data: BettingResultPastDataItem;
  data: GambleType.Gamble;
  userData: {
    bettingCoin: number;
    choose: number;
  };
}

export default class Example extends PureComponent<BettingResultPastProps> {
  render() {
    function bcomp2() {
      return (
        <div className="BettingResultPastComponent2">
          <button className="BettingResultPastButton0">결과 확인</button>
        </div>
      );
    }
    function bcomp3() {
      var btn1LengthPortion = 58;
      var btn2LengthPortion = 42;
      return (
        <div className="BettingResultPastComponent">
          <button className="BettingResultPastButton1">
            <span>짜장면</span>
            <br />
            <span>{btn1LengthPortion}%</span>
          </button>
          <button className="BettingResultPastButton2">
            <span>짬뽕</span>
            <br />
            <span>{btn2LengthPortion}%</span>
          </button>
        </div>
      );
    }

    var comp2 = bcomp2();
    var comp3 = bcomp3();
    var data = this.props.data;
    var currentTime = Date.now();
    var remainTime = data.closeTime - currentTime;
    var currentDate = BettingUtils.convertUTCtoDate(data.openTime);
    // var buttonComponent = remainTime > 0 ? comp2 : comp3;
    var buttonComponent = data.result === -1 ? comp2 : comp3;

    return (
      <div className="root">
        <div>
          <BettingContent
            data={data}
            // bettingTitle={currentDate + " 결과"}
            // addtionalComponent={buttonComponent}
          />
        </div>
      </div>
    );
  }
}
