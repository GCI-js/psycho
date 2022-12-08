import React from "react";
import { useNavigate } from "react-router-dom";
import LargeTitle from "../Common/LargeTitle";
import MainButton from "../Common/MainButton";
import MediumTitle from "../Common/MediumTitle";

function SignUpPage1() {
  const navigate = useNavigate();
  var mediumText = `Psycho에 등록된 계정이 없어요!
  회원가입을 하시려면 아래 내용을
  채워주세요`;

  const moveToNext = () => {
    // TODO move to SignUpPage2
    const path = `/signUp2`;
    navigate(path);
  };

  return (
    <div>
      <LargeTitle text="회원가입" />
      <MediumTitle text={mediumText} />
      <div>닉네임</div>
      <input type="text" placeholder="@아크릴 오므라이스"></input>
      <button>랜덤 생성</button>
      <div>MBTI를 선택해 주세요</div>
      <div></div>
      <div>혈액형을 선택해 주세요</div>
      <div></div>
      <MainButton text="게속" onClick={moveToNext} />
    </div>
  );
}

export default SignUpPage1;
