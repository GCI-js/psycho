import React from "react";
import shepherd from "../../../seoha/service/shepherd";
import BackButton from "../Common/BackButton";
import LargeTitle from "../Common/LargeTitle";
import MainButton from "../Common/MainButton";
import MediumTitle from "../Common/MediumTitle";
import "./SignUpPage1.css";

function SignUpPage1() {
  var mediumText = `Psycho에 등록된 계정이 없어요!
  회원가입을 하시려면 아래 내용을
  채워주세요`;

  const moveToNext = () => {
    shepherd.whip("wonjae", "signUp2");
  };

  return (
    <div className="container">
      <BackButton />
      <LargeTitle text="회원가입" />
      <MediumTitle text={mediumText} />
      <div>
        <div className="small_title">닉네임</div>
        <input type="text" placeholder="@아크릴 오므라이스"></input>
        <button className="nickname_create_btn">랜덤 생성</button>
      </div>
      <div>MBTI를 선택해 주세요</div>
      <div></div>
      <div>혈액형을 선택해 주세요</div>
      <div></div>
      <MainButton text="게속" onClick={moveToNext} />
    </div>
  );
}

export default SignUpPage1;
