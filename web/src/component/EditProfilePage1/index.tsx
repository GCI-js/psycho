import { useEffect, useState } from "react";
import EditProfilePage2 from "../EditProfilePage2";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";
import { MBTISelectBox } from "../MBTISelectBox";
import { BloodTypeSelectBox } from "../BloodTypeSelectBox";
import { getInitUserData } from "../../service/getInitUserData";
import { MBTIValueToState } from "../../service/convertMBTI";
import ArrowLeft from "../../img/Arrow_left.png";
import NicknameFlag from "../../img/nicknameFlag.png";
import { getRandNickname } from "../../service/getRandNickname";

interface MBTIStates {
  MBTI: string;
  state: boolean;
}

interface BloodTypeStates {
  bloodType: string;
  state: boolean;
}

interface Props extends Properties {
  setNavVisible: Function;
}

const EditProfilePage1 = (properties: Props) => {
  const id = [`_${idiotproof.trace(EditProfilePage1)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  let userData: any = localStorage.getItem("userData");
  properties.setNavVisible(true);
  const [nickname, setNickname] = useState("");
  if (userData == null || userData.nickname == undefined) {
    userData = getInitUserData();
  }
  const [MBTIStates, setMBTIStates] = useState<MBTIStates[]>([
    { MBTI: "E", state: false },
    { MBTI: "N", state: false },
    { MBTI: "F", state: false },
    { MBTI: "J", state: false },
    { MBTI: "I", state: false },
    { MBTI: "S", state: false },
    { MBTI: "T", state: false },
    { MBTI: "P", state: false },
  ]);
  const [bloodTypeStates, setBloodTypeStates] = useState<BloodTypeStates[]>([
    { bloodType: "A", state: false },
    { bloodType: "B", state: false },
    { bloodType: "AB", state: false },
    { bloodType: "O", state: false },
  ]);

  const handleBackButton = () => {
    shepherd.whip("test", "WelcomePage");
  };
  useEffect(() => {
    userData = getInitUserData();
    setNickname(userData.nickname);
    setMBTIStates(MBTIValueToState(userData.mbtis[0]));
    setBloodTypeStates([
      { bloodType: "A", state: userData.bloodType == "A" ? true : false },
      { bloodType: "B", state: userData.bloodType == "B" ? true : false },
      { bloodType: "AB", state: userData.bloodType == "AB" ? true : false },
      { bloodType: "O", state: userData.bloodType == "O" ? true : false },
    ]);
    console.log(userData);
  }, []);
  const genNickname = () => {
    setNickname(getRandNickname());
  };
  return (
    <div id={id} className={cl}>
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />
      <div className="large-title">@{nickname}</div>
      <div className="nickname-area">
        <div className="small-grey-title">
          <div className="border">닉네임</div>
        </div>
        <div className="nickname-generator">
          <img className="nickname-icon" src={NicknameFlag} />
          <input
            className="nickname-input"
            type="text"
            placeholder={`@${nickname}`}
            // value={`${nickname}`}
          />
          <button className="nickname-gen-button" onClick={genNickname}>
            랜덤 생성
          </button>
        </div>
      </div>
      <div className="mbti-area">
        <div className="text">
          <div className="small-grey-title">
            <div className="border">MBTI</div>
            {"를 선택해주세요  "}
          </div>
        </div>

        <MBTISelectBox MBTIStates={MBTIStates} setMBTIStates={setMBTIStates} />
      </div>
      <div className="blood-type-area">
        <div className="small-grey-title">
          <div className="border">혈액형</div>을 선택해주세요
        </div>
        <BloodTypeSelectBox
          bloodTypeStates={bloodTypeStates}
          setBloodTypeStates={setBloodTypeStates}
        />
      </div>
      <button
        className="next-step-button-on"
        onClick={() => shepherd.whip("test", "EditProfilePage2")}
      >
        계속
      </button>
    </div>
  );
};

export default EditProfilePage1;
