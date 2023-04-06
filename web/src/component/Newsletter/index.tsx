import icon from "../../img/newsletterSelectButton.png";
import { Newsletter } from "../../@types/Newsletter";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";

const Newsletter = (props: Newsletter, properties: Properties) => {
  const id = [`_${idiotproof.trace(Newsletter)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  return (
    <div id={id} className={cl}>
      <div className="newletter-card-item">
        <div className="newletter-card-header">MBTI 뉴스레터</div>
        <div className="newletter-card-img">
          <a href={props.link}>
            <img src={props.thumbnail} width="97%" height="184px"></img>
          </a>
        </div>
        <div className="newletter-card-desc">
          <div className="newsletter-card-col">
            <div className="newletter-card-title">
              <span>{props.title}</span>
            </div>

            <div className="newletter-card-tag">
              <span className="newletter-card-tag-name">{props.hashtag} </span>
            </div>
          </div>
          <img
            src={icon}
            className="newletter-card-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = props.link;
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

<style scoped></style>;
