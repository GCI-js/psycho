import React from "react";
import backButtonIcon from "../../Assets/MenuTitle.svg";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="button_wrapper">
      <img
        className="back_button"
        src={backButtonIcon}
        onClick={() => navigate(-1)}
      ></img>
    </div>
  );
}

export default BackButton;
