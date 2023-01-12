import React from "react";
import "./MainButton.css";

interface IProps {
  text: String;
  onClick: () => void;
}

function MainButton(props: IProps) {
  return (
    <div className="main_btn" onClick={props.onClick}>
      <div className="main_btn_txt">{props.text}</div>
    </div>
  );
}

export default MainButton;
