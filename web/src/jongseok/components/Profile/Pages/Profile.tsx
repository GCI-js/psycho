import React, { useState } from "react";
import MBTIHistogram from "../Elements/MbtiHistogram";
import HashtagList from "../Elements/HashtagList";
import Gamble from "../Elements/Gamble";
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
          // src={require("../img/setting.png")}
          alt="edit"
          className="settingButton"
          onClick={() => {}}
        />
        {/* <button
					onClick={() => {
						// setIsEdit(!isEdit);
					}}
				>
					edit
				</button> */}
      </div>
      {isEdit ? null : (
        <div>
          <MBTIHistogram />
          <HashtagList />
          <Gamble />
        </div>
      )}
    </div>
  );
};

export default Profile;
