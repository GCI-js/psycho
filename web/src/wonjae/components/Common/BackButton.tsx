import React from "react";
import backButtonIcon from "../../Assets/icon_BackButton.svg";
import "./BackButton.css";

interface IProps {
  onClick: () => void;
}

// 뒤로가기 버튼
function BackButton(props: IProps) {
  return (
    <div className="back_button_wrapper">
      <img
        className="back_button_img"
        src={backButtonIcon}
        onClick={props.onClick}
      ></img>
    </div>
  );
}

export default BackButton;
