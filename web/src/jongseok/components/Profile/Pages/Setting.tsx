import React, { useState } from "react";
import "./Setting.css";

const Setting = () => {
  return (
    <div className="editUserInfoContainer">
      <div className="username">설정</div>
      <div className="onoff-switch-container">
        <input type="checkbox" name="onoff-switch" id="onoff-switch1" />
      </div>
    </div>
  );
};

export default Setting;
