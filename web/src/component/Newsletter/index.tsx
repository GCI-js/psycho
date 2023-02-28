import * as React from "react";
import icon from "./icon_newsletter.png";
import { Newsletter } from "../../@types/Newsletter";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";
import Setting from "../Setting";

const Newsletter = (props: Newsletter, properties: Properties) => {
  const id = [`_${idiotproof.trace(Setting)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  return (
    <div id={id} className={cl}>
      <div className="newletter-card-item">
        <div className="newletter-card-header">MBTI 뉴스레터</div>
        <div className="newletter-card-img">
          <a href={props.url}>
            <img src={props.thumbnail} width="97%" height="184px"></img>
          </a>
        </div>
        <div className="newletter-card-desc">
          <div className="newsletter-card-col">
            <div className="newletter-card-title">
              <span>{props.title}</span>
            </div>

            <div className="newletter-card-tag">
              {props.hashtags.map(function (i): JSX.Element {
                return (
                  <span className="newletter-card-tag-name">#{i} </span>
                );
              })}
            </div>
          </div>
          <img
            src={icon}
            className="newletter-card-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = props.url;
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

<style scoped></style>;
