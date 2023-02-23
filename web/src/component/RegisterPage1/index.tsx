import { useEffect, useState } from "react";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";
import { MBTISelectBox } from "../MBTISelectBox";
import { BloodTypeSelectBox } from "../BloodTypeSelectBox";
import ArrowLeft from "../../img/Arrow_left.png";
import NicknameFlag from "../../img/nicknameFlag.png";
import { getRandNickname } from "../../service/getRandNickname";
import { getInitUserData } from "../../service/getInitUserData";
import { MBTIStateToValue, MBTIValueToState } from "../../service/convertMBTI";

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

const RegisterPage1 = (properties: Props) => {
  const id = [`_${idiotproof.trace(RegisterPage1)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  let userData: any = localStorage.getItem("userData");
  if (userData == null || userData.nickname == undefined) {
    console.log("HERE");
    console.log(userData);
    userData = getInitUserData();
    console.log(userData);
  }
  const [nickname, setNickname] = useState("");
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

  const nicknamePlaceHolder = "랜덤 생성 버튼을 눌러주세요!";
  properties.setNavVisible(false);

  useEffect(() => {
    setNickname(userData.nickname);
    setMBTIStates(MBTIValueToState(userData.mbtis[0]));
    setBloodTypeStates([
      { bloodType: "A", state: userData.bloodType == "A" ? true : false },
      { bloodType: "B", state: userData.bloodType == "B" ? true : false },
      { bloodType: "AB", state: userData.bloodType == "AB" ? true : false },
      { bloodType: "O", state: userData.bloodType == "O" ? true : false },
    ]);
  }, []);
  const handleBackButton = () => {
    shepherd.whip("test", "WelcomePage");
  };
  const genNickname = () => {
    setNickname(getRandNickname());
  };
  const gotoNextStep = () => {
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
    localStorage.setItem("userData", userData);
    shepherd.whip("test", "RegisterPage2");
  };
  return (
    <div id={id} className={cl}>
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />
      <div className="large-title">회원가입</div>
      <div className="medium-title">
        <div className="border">Psycho</div>에 등록된 계정이 없어요! 회원가입을
        하시려면 아래 내용을 채워주세요.
      </div>
      <div className="nickname-area">
        <div className="small-grey-title">
          <div className="border">닉네임</div>
        </div>
        <div className="nickname-generator">
          <img className="nickname-icon" src={NicknameFlag} />
          <input
            className="nickname-input"
            type="text"
            placeholder={nicknamePlaceHolder}
            value={nickname}
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
          <div className="tiny-grey-title">
            (모르신다면 선택하지 않으셔도 괜찮아요!)
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
      {nickname == "" && <button className="next-step-button-off">계속</button>}
      {nickname != "" && (
        <button className="next-step-button-on" onClick={gotoNextStep}>
          계속
        </button>
      )}
    </div>
  );
};

export default RegisterPage1;
