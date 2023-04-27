import React, { useState, useEffect } from "react";
import MBTIHistogram from "../MbtiHistogram/";
import HashtagList from "../HashtagList/HashtagList";
import settingIcon from "../../img/setting.png";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import { getInitUserData } from "../../service/getInitUserData";
import styles from "./index.module.scss";

const Profile = (properties: Properties) => {
  //userName은 백엔드에서 userName생성하는 코드 가져와서 써야합니다.
  const id = [`_${idiotproof.trace(Profile)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  const [userData, setUserData] = useState<any>("");
  useEffect(() => {
    let tmp: any = localStorage.getItem("userData");
    if (tmp != null) tmp = JSON.parse(tmp);
    if (tmp == null || tmp.nickname == undefined) tmp = getInitUserData();
    if (tmp.nickname != userData.nickname) {
      console.log("nickname....");
      setUserData(tmp);
    }
  });
  return (
    <div id={id} className={cl}>
      <div className="container">
        <div
          className="pcontainer"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="username">{`${userData.nickname}`}</div>
          <img
            src={settingIcon}
            alt="edit"
            className="settingButton"
            onClick={() => {
              shepherd.whip("test", "EditProfilePage1");
            }}
          />
        </div>
        <div>
          <MBTIHistogram />
          <HashtagList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
