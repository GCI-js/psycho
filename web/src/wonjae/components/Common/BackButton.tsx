import React from "react";
import backButtonIcon from "../../Assets/MenuTitle.svg";
import "./BackButton.css";

function BackButton() {
  const moveBack = () => {
    console.log("moveback");
  };

  return (
    <div className="button_wrapper">
      <img
        className="back_button"
        src={backButtonIcon}
        onClick={() => moveBack}
      ></img>
    </div>
  );
}

export default BackButton;
