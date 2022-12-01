import React from "react";
import { useNavigate } from "react-router-dom";
import LargeTitle from "../Common/LargeTitle";
import MainButton from "../Common/MainButton";
import MediumTitle from "../Common/MediumTitle";

function SignUpPage3() {
  const navigate = useNavigate();
  const mediumText = `마지막 페이지에요!`;

  const moveToNext = () => {};

  return (
    <div>
      <LargeTitle text="회원가입" />
      <MediumTitle text={mediumText} />
      <MainButton text="게속" onClick={moveToNext} />
    </div>
  );
}

export default SignUpPage3;
