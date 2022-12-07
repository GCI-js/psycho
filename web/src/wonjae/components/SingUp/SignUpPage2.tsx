import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Common/BackButton";
import LargeTitle from "../Common/LargeTitle";
import MainButton from "../Common/MainButton";
import MediumTitle from "../Common/MediumTitle";

function SignUpPage2() {
  const navigate = useNavigate();
  const mediumText = `거의 다 됐어요!
    조금만 더 힘내세요!`;

  const moveToNext = () => {
    const path = `/signUp3`;
    navigate(path);
  };
  return (
    <div>
      <BackButton />
      <LargeTitle text="회원가입" />
      <MediumTitle text={mediumText} />
      <MainButton text="게속" onClick={moveToNext} />
    </div>
  );
}

export default SignUpPage2;
