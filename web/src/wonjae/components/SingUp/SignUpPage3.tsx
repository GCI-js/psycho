import React from "react";
import shepherd from "../../../seoha/service/shepherd";
import BackButton from "../Common/BackButton";
import LargeTitle from "../Common/LargeTitle";
import MainButton from "../Common/MainButton";
import MediumTitle from "../Common/MediumTitle";

function SignUpPage3() {
  const mediumText = `마지막 페이지에요!`;
  const moveBack = () => {
    shepherd.whip("wonjae", "sginUp2");
  };

  const moveToNext = () => {
    shepherd.whip("wonjae", "signUp4");
  };

  return (
    <div>
      <BackButton onClick={moveBack} />
      <LargeTitle customClass="" text="회원가입" />
      <MediumTitle customClass="" text={mediumText} />
      <MainButton text="계속" onClick={moveToNext} />
    </div>
  );
}

export default SignUpPage3;
