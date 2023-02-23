import { useState } from "react";
import EditProfilePage2 from "../EditProfilePage2";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";
import { MBTISelectBox } from "../MBTISelectBox";
import { BloodTypeSelectBox } from "../BloodTypeSelectBox";
import ArrowLeft from "../../img/Arrow_left.png";
import NicknameFlag from "../../img/nicknameFlag.png";

interface Props extends Properties {
  setNavVisible: Function;
}

const EditProfilePage1 = (properties: Props) => {
  const id = [`_${idiotproof.trace(EditProfilePage1)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const dummyUserName = "아크릴오므라이스";
  properties.setNavVisible(true);
  /*
[2022.01.12 jongseok lee] 
MBTI 버튼 클릭했을시 이펙트 출력하는 부분 코드가 매우 더러워서 버리는게 나을 거 같다는 생각도 들음. 과감히 지워도 됨
*/
  const handleBackButton = () => {
    shepherd.whip("test", "WelcomePage");
  };
  return (
    <div id={id} className={cl}>
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />
      <div className="large-title">@{dummyUserName}</div>
      <div className="nickname-area">
        <div className="small-grey-title">
          <div className="border">닉네임</div>
        </div>
        <div className="nickname-generator">
          <img className="nickname-icon" src={NicknameFlag} />
          <input
            className="nickname-input"
            type="text"
            placeholder={`@${dummyUserName}`}
          />
          <button className="nickname-gen-button">랜덤 생성</button>
        </div>
      </div>
      <div className="mbti-area">
        <div className="text">
          <div className="small-grey-title">
            <div className="border">MBTI</div>
            {"를 선택해주세요  "}
          </div>
        </div>
        <MBTISelectBox MBTIStates={[]} setMBTIStates={() => {}} />
      </div>
      <div className="blood-type-area">
        <div className="small-grey-title">
          <div className="border">혈액형</div>을 선택해주세요
        </div>
        <BloodTypeSelectBox
          bloodTypeStates={[]}
          setBloodTypeStates={() => {}}
        />
      </div>
      <button
        className="next-step-button"
        onClick={() => shepherd.whip("test", "EditProfilePage2")}
      >
        계속
      </button>
    </div>
  );
};

export default EditProfilePage1;
