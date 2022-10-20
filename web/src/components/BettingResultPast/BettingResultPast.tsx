import React, { PureComponent } from "react";
import "./BettingResultPast.css";
import GambleType from "../../../../server/src/type/Gamble";

const BUTTON_WIDTH = 132;
const BUTTON_HEIGHT = 40;

interface BettingResultPastDataItem {
  date: number;
  content: string;
  mbtiType: string;
  betting1: {
    name: string;
    voteRatio: number;
    winRatio: number;
    count: number;
  };
  betting2: {
    name: string;
    voteRatio: number;
    winRatio: number;
    count: number;
  };
  remainTime: string;
}

interface BettingResultPastProps {
  data: GambleType.Gamble;
  // data: BettingResultPastDataItem;
}

export default class Example extends PureComponent<BettingResultPastProps> {
  render() {
    var data = this.props.data;
    return <div className="root"></div>;
  }
}
