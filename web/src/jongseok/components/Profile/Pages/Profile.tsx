import React, { useState } from "react";
import MBTIHistogram from "../Elements/MbtiHistogram";
import HashtagList from "../Elements/HashtagList";
import Betting from "../Elements/Betting";
import settingIcon from "../img/setting.png";
import "./Profile.css";
// import pencilImg from "../img/pencil.png";
const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const dummyUserName = "아크릴오므라이스";
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="username">{`${dummyUserName}`}</div>
        <img
          src={settingIcon}
          alt="edit"
          className="settingButton"
          onClick={() => {}}
        />
      </div>
      {isEdit ? null : (
        <div>
          <MBTIHistogram />
          <HashtagList />
          <Betting />
        </div>
      )}
    </div>
  );
};

export default Profile;
