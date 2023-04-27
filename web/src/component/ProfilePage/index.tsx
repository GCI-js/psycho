import React from "react";
import logo from "./logo.svg";
import Profile from "../Profile";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
function ProfilePage(properties: Properties) {
  const id = [`_${idiotproof.trace(ProfilePage)}`, properties.id].join();
  shepherd.adopt("ProfilePage", id);
  return (
    // <div className="jongseok">

    <div className="ProfilePage">
      {/* <EditUserInfo /> */}
      <Profile />
    </div>
  );
}

export default ProfilePage;
