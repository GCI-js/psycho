import React from "react";
import "./LargeTitle.css";

interface IProps {
  text: String;
}

function LargeTitle(props: IProps) {
  return (
    <div className="large_title">
      <b>{props.text}</b>
    </div>
  );
}

export default LargeTitle;
