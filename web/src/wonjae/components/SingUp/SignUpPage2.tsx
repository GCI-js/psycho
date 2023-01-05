import React from "react";
import shepherd from "../../../seoha/service/shepherd";
import BackButton from "../Common/BackButton";
import LargeTitle from "../Common/LargeTitle";
import MainButton from "../Common/MainButton";
import MediumTitle from "../Common/MediumTitle";

function SignUpPage2() {
  const mediumText = `거의 다 됐어요!
    조금만 더 힘내세요!`;

  const moveBack = () => {
    shepherd.whip("wonjae", "sginUp1");
    console.log("whip to 1");
  };
  const moveToNext = () => {
    shepherd.whip("wonjae", "signUp3");
  };

  return (
    <div>
      <BackButton onClick={moveBack} />
      <LargeTitle customClass="" text="회원가입" />
      <MediumTitle customClass="" text={mediumText} />
      <MainButton text="게속" onClick={moveToNext} />
    </div>
  );
}

export default SignUpPage2;
