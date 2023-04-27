import { useEffect, useState } from "react";
import EditProfilePage2 from "../EditProfilePage2";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";
import { MBTISelectBox } from "../MBTISelectBox";
import { BloodTypeSelectBox } from "../BloodTypeSelectBox";
import { getInitUserData } from "../../service/getInitUserData";
import { MBTIValueToState, MBTIStateToValue } from "../../service/convertMBTI";
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
  properties.setNavVisible(true);
  const [nickname, setNickname] = useState("");
  const [userData, setUserData] = useState<any>("");

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
    shepherd.whip("test", "ProfilePage");
  };
  const saveUserData = async (userData: any) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const gotoNextStep = async () => {
    userData.nickname = nickname;
    userData.mbtis.unshift(MBTIStateToValue(MBTIStates));
    userData.bloodType =
      bloodTypeStates[0].state == true
        ? "A"
        : bloodTypeStates[1].state == true
        ? "B"
        : bloodTypeStates[2].state == true
        ? "AB"
        : bloodTypeStates[3].state == true
        ? "O"
        : "";
    await saveUserData(userData);
    console.log("saved1");
    shepherd.chase("EditProfilePage2");
    shepherd.whip("test", "EditProfilePage2");
  };
  useEffect(() => {
    let tmp: any = localStorage.getItem("userData");
    if (tmp != null) tmp = JSON.parse(tmp);
    if (tmp == null || tmp.nickname == undefined) tmp = getInitUserData();
    setUserData(tmp);
    setNickname(tmp.nickname);
    setMBTIStates(MBTIValueToState(tmp.mbtis[0]));
    setBloodTypeStates([
      { bloodType: "A", state: tmp.bloodType == "A" ? true : false },
      { bloodType: "B", state: tmp.bloodType == "B" ? true : false },
      { bloodType: "AB", state: tmp.bloodType == "AB" ? true : false },
      { bloodType: "O", state: tmp.bloodType == "O" ? true : false },
    ]);
    console.log(userData);
  }, []);
  const genNickname = () => {
    setNickname(getRandNickname());
  };
  return (
    <div id={id} className={cl}>
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />
      <div className="large-title">{nickname}</div>
      <div className="nickname-area">
        <div className="small-grey-title">
          <div className="border">닉네임</div>
        </div>
        <div className="nickname-generator">
          <img className="nickname-icon" src={NicknameFlag} />
          <input
            className="nickname-input"
            type="text"
            placeholder={`${nickname}`}
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
        onClick={nickname == "" ? () => {} : gotoNextStep}
      >
        계속
      </button>
    </div>
  );
};

export default EditProfilePage1;
