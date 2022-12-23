import React from "react";
import "./LargeTitle.css";

interface IProps {
  text: String;
  customClass: string;
}

function LargeTitle(props: IProps) {
  return (
    <div className={props.customClass + " large_title"}>
      <b>{props.text}</b>
    </div>
  );
}

export default LargeTitle;
