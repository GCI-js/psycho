import React from "react";
import "./MainButton.css";

interface IProps {
  text: String;
  onClick: () => void;
}

function MainButton(props: IProps) {
  return (
    <div className="wonjae_main_btn" onClick={props.onClick}>
      <div className="wonjae_main_btn_text">{props.text}</div>
    </div>
  );
}

export default MainButton;
