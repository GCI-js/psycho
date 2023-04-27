import MBTIHistogram from "../MbtiHistogram/";
import editIcon from "../../img/Edit_fill.png";
import "./Profile.css";
import shepherd from "../../service/shepherd";
const Profile = () => {
  //userName은 백엔드에서 userName생성하는 코드 가져와서 써야합니다.
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
          src={editIcon}
          alt="edit"
          className="settingButton"
          onClick={() => {
            shepherd.whip("test", "EditProfilePage1");
          }}
        />
      </div>
      <div>
        <MBTIHistogram />
      </div>
    </div>
  );
};

export default Profile;
