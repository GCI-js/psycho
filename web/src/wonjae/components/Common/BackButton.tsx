import React from "react";
import backButtonIcon from "../../Assets/MenuTitle.svg";
import "./BackButton.css";

interface IProps {
  onClick: () => void;
}

function BackButton(props: IProps) {
  return (
    <div className="button_wrapper">
      <img
        className="back_button"
        src={backButtonIcon}
        onClick={props.onClick}
      ></img>
    </div>
  );
}

export default BackButton;
