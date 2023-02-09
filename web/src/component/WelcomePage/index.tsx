import MainButton from "../MainButton/MainButton";
import welcomeImage from "../../img/WelcomeImg.png";
import shepherd from "../../service/shepherd";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";


const WelcomePage = (properties: Properties) => {
    const cl = [styles.index, properties.className].join(" ");
    const largeTitle = "반가워요!";
    const context = `Psycho는 당시의 MBTI
    변동을 추적해드려요 !`;
    return <div id={`_${idiotproof.trace(WelcomePage)}`} className={cl}>
        <div className="top_container">
            <div className="large_title">{largeTitle}</div>
            <img className="welcome_icon" src={welcomeImage} />
        </div>
        <div className="bottom_container">
            <div className="context">{context}</div>
            <div className="main_button">
                <MainButton
                text="시작해볼까요?"
                onClick={() => {
                    shepherd.whip("introduction", "launching");
                    shepherd.chase("main-frame");
                }}
                />
            </div>
        </div>
    </div>
};

export default WelcomePage;
