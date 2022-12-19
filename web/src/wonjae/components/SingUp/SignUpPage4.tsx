import React from "react";
import shepherd from "../../../seoha/service/shepherd";
import BackButton from "../Common/BackButton";
import LargeTitle from "../Common/LargeTitle";
import MainButton from "../Common/MainButton";

function SignUpPage4() {
  const mediumText = `마지막 페이지에요!`;

  const moveToNext = () => {
    shepherd.whip("test", "jongseok");
  };

  return (
    <div>
      <BackButton />
      <LargeTitle text="이용약관" />
      <MainButton text="게속" onClick={moveToNext} />
    </div>
  );
}

export default SignUpPage4;
