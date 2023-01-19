import React, { useState } from "react";
import bloodTypeSelectFrame from "../../img/bloodTypeSelectFrame.png";
import ButtonBox from "../ButtonBox/ButtonBox";
import RegisterPage2 from "../RegisterPage2/RegisterPage2";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";
import { MBTISelectBox } from "../MBTISelectBox";


interface BloodTypeStates {
  bloodType: string;
  state: boolean;
}

const RegisterPage1 = (properties: Properties) => {
  const id = [`_${idiotproof.trace(RegisterPage1)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  const [isRegisterPage2, setIsRegisterPage2] = useState(false);
  const dummyUserName = "아크릴오므라이스";
  
  const [bloodTypeStates, setBloodTypeStates] = React.useState<
    BloodTypeStates[]
  >([
    { bloodType: "A", state: false },
    { bloodType: "B", state: false },
    { bloodType: "AB", state: false },
    { bloodType: "O", state: false },
  ]);
  /*
[2022.01.12 jongseok lee] 
MBTI 버튼 클릭했을시 이펙트 출력하는 부분 코드가 매우 더러워서 버리는게 나을 거 같다는 생각도 들음. 과감히 지워도 됨
*/

  const handleBloodTypeSelectBox = (bloodType: string) => {
    let newBloodTypeStates = bloodTypeStates.map((bloodTypeState) => {
      if (bloodTypeState.bloodType === bloodType) {
        return {
          bloodType: bloodTypeState.bloodType,
          state: !bloodTypeState.state,
        };
      } else {
        return {
          bloodType: bloodTypeState.bloodType,
          state: bloodTypeState.state,
        };
      }
    });
    if (
      bloodType === "A" &&
      newBloodTypeStates[0].state &&
      (newBloodTypeStates[1].state ||
        newBloodTypeStates[2].state ||
        newBloodTypeStates[3].state)
    ) {
      newBloodTypeStates[1].state = false;
      newBloodTypeStates[2].state = false;
      newBloodTypeStates[3].state = false;
    } else if (
      bloodType === "B" &&
      newBloodTypeStates[1].state &&
      (newBloodTypeStates[0].state ||
        newBloodTypeStates[2].state ||
        newBloodTypeStates[3].state)
    ) {
      newBloodTypeStates[0].state = false;
      newBloodTypeStates[2].state = false;
      newBloodTypeStates[3].state = false;
    } else if (
      bloodType === "AB" &&
      newBloodTypeStates[2].state &&
      (newBloodTypeStates[0].state ||
        newBloodTypeStates[1].state ||
        newBloodTypeStates[3].state)
    ) {
      newBloodTypeStates[0].state = false;
      newBloodTypeStates[1].state = false;
      newBloodTypeStates[3].state = false;
    } else if (
      bloodType === "O" &&
      newBloodTypeStates[3].state &&
      (newBloodTypeStates[0].state ||
        newBloodTypeStates[1].state ||
        newBloodTypeStates[2].state)
    ) {
      newBloodTypeStates[0].state = false;
      newBloodTypeStates[1].state = false;
      newBloodTypeStates[2].state = false;
    }
    setBloodTypeStates([...newBloodTypeStates]);
  };

  if (isRegisterPage2) {
    return <RegisterPage2 />;
  }
  return (
    <div id={id} className={cl}>
      <div className="username">{`@${dummyUserName}`}</div>
      <div className="userDetailTitle">닉네임</div>
      <div>
        <input type="text" placeholder={`@${dummyUserName}`} />
        <button>랜덤 생성</button>
      </div>
      <div className="userDetailTitle">MBTI를 선택해주세요</div>
      <div>
        <MBTISelectBox />
      </div>
      <div>
        <div className="userDetailTitle">혈액형을 선택해주세요</div>
      </div>
      <div
        className="selectBloodTypeBox"
        style={{ background: `url(${bloodTypeSelectFrame})` }}
      >
        {bloodTypeStates.map((el) => {
          return (
            <ButtonBox
              state={el.state}
              setState={handleBloodTypeSelectBox}
              content={el.bloodType}
            />
          );
        })}
      </div>
      <button
        className="BasicButton"
        onClick={() => shepherd.whip("test", "RegisterPage2")}
      >
        계속
      </button>
      {/* <BasicButton
        content="계속"
        pFunction={shepherd.whip("test", "RegisterPage2")}
      /> */}
    </div>
  );
};

export default RegisterPage1;
