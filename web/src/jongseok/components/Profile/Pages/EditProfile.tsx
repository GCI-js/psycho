import { url } from "inspector";
import React, { useState } from "react";
import "./EditProfile.css";
import MBTISelectFrame from "../img/MBTISelectFrame.png";
import bloodTypeSelectFrame from "../img/bloodTypeSelectFrame.png";
import ButtonBox from "../../Common/ButtonBox";
import BasicButton from "../../Common/BasicButton";
import EditUserInfo from "./EditUserInfo";

interface MBTIStates {
  MBTI: string;
  state: boolean;
}

interface bloodTypeStates {
  bloodType: string;
  state: boolean;
}

const EditProfile = () => {
  const [isEditUserInfo, setIsEditUserInfo] = useState(false);
  const dummyUserName = "아크릴오므라이스";
  const [MBTIStates, setMBTIStates] = React.useState<MBTIStates[]>([
    { MBTI: "E", state: false },
    { MBTI: "S", state: false },
    { MBTI: "T", state: false },
    { MBTI: "J", state: false },
    { MBTI: "I", state: false },
    { MBTI: "N", state: false },
    { MBTI: "F", state: false },
    { MBTI: "P", state: false },
  ]);
  const [bloodTypeStates, setBloodTypeStates] = React.useState<
    bloodTypeStates[]
  >([
    { bloodType: "A", state: false },
    { bloodType: "B", state: false },
    { bloodType: "AB", state: false },
    { bloodType: "O", state: false },
  ]);

  const handleIsEditUserInfo = () => {
    // setIsEditUserInfo(true)
  };

  const handleMBTISelectBox = (MBTI: string) => {
    let newMBTIState = MBTIStates.map((MBTIState) => {
      if (MBTIState.MBTI === MBTI) {
        return { MBTI: MBTIState.MBTI, state: !MBTIState.state };
      } else {
        return { MBTI: MBTIState.MBTI, state: MBTIState.state };
      }
    });
    if (MBTI === "E" && newMBTIState[0].state && newMBTIState[4].state) {
      newMBTIState[4].state = false; // I
    } else if (MBTI === "S" && newMBTIState[1].state && newMBTIState[5].state) {
      newMBTIState[5].state = false; // N
    } else if (MBTI === "T" && newMBTIState[2].state && newMBTIState[6].state) {
      newMBTIState[6].state = false; // F
    } else if (MBTI === "J" && newMBTIState[3].state && newMBTIState[7].state) {
      newMBTIState[7].state = false; // P
    } else if (MBTI === "I" && newMBTIState[4].state && newMBTIState[0].state) {
      newMBTIState[0].state = false; // E
    } else if (MBTI === "N" && newMBTIState[5].state && newMBTIState[1].state) {
      newMBTIState[1].state = false; // S
    } else if (MBTI === "F" && newMBTIState[6].state && newMBTIState[2].state) {
      newMBTIState[2].state = false; // T
    } else if (MBTI === "P" && newMBTIState[7].state && newMBTIState[3].state) {
      newMBTIState[3].state = false; // J
    }

    setMBTIStates([...newMBTIState]);
  };

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

  if (isEditUserInfo) {
    return <EditUserInfo />;
  }
  return (
    <div className="editProfileContainer">
      <div className="username">{`@${dummyUserName}`}</div>
      <div className="userDetailTitle">닉네임</div>
      <div>
        <input type="text" placeholder={`@${dummyUserName}`} />
        <button>랜덤 생성</button>
      </div>
      <div className="userDetailTitle">MBTI를 선택해주세요</div>
      <div>
        <div
          className="selectMBTIBox"
          style={{ background: `url(${MBTISelectFrame})` }}
        >
          {MBTIStates.map((el) => {
            return (
              <ButtonBox
                state={el.state}
                setState={handleMBTISelectBox}
                content={el.MBTI}
              />
            );
          })}
        </div>
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
      <BasicButton content="계속" pFunction={handleIsEditUserInfo} />
    </div>
  );
};

export default EditProfile;
