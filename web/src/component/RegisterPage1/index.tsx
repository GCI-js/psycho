import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";
import { MBTISelectBox } from "../MBTISelectBox";
import { BloodTypeSelectBox } from "../BloodTypeSelectBox";
import ArrowLeft from "../../img/Arrow_left.png";

const RegisterPage1 = (properties: Properties) => {
  const id = [`_${idiotproof.trace(RegisterPage1)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const dummyUserName = "아크릴오므라이스";
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
      <div className="large-title">회원가입</div>
      <div className="medium-title">
        <p className="border">Psycho</p>에 등록된 계정이 없어요! 회원가입을
        하시려면 아래 내용을 채워주세요.
      </div>
      <div className="nickname-area">
        <div className="small-title">닉네임</div>
        <div>
          <input type="text" placeholder={`@${dummyUserName}`} />
          <button>랜덤 생성</button>
        </div>
      </div>
      <div className="mbti-area">
        <div className="userDetailTitle">MBTI를 선택해주세요</div>
        <MBTISelectBox />
      </div>
      <div className="blood-type-area">
        <div className="userDetailTitle">혈액형을 선택해주세요</div>
        <BloodTypeSelectBox />
      </div>
      <button
        className="next-step-button"
        onClick={() => shepherd.whip("test", "RegisterPage2")}
      >
        계속
      </button>
    </div>
  );
};

export default RegisterPage1;
