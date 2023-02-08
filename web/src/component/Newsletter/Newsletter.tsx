import * as React from "react";
import "./Newsletter.css";
import icon from "./icon_newsletter.png";
import { Newsletter } from "../../@types/Newsletter";



const Newsletter = (props: Newsletter) => {
  return (
    <div>
      <div className="newletter_card_item">
        <div className="newletter_card_header">MBTI 뉴스레터</div>
        <div className="newletter_card_img">
          <a href={props.url}>
            <img
              src={props.thumbnail}
              width="97%"
              height="184px"
            ></img>
          </a>
        </div>
        <div className="newletter_card_desc">
          <div>
            <div className="newletter_card_title">
              <span>{props.title}</span>
            </div>

            <div className="newletter_card_tag">
              {props.hashtags.map(function (i): JSX.Element {
                return (
                  <span className="newletter_card_tag_name"></span>
                  // <span className="newletter_card_tag_name">#{i.name} </span>
                );
              })}
            </div>
          </div>
          <img
            src={icon}
            className="newletter_card_button"
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
