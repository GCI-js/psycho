import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "../Profile/Profile";
import EditProfile from "../EditProfile/EditProfile";
import EditUserInfo from "../EditUserInfo/EditUserInfo";
import Setting from "../Setting/Setting";
function ProfileStats() {
  return (
    // <div className="jongseok">

    <div className="ProfilePage">
      {/* <EditUserInfo /> */}
      <Profile />
    </div>
  );
}

export default ProfileStats;
