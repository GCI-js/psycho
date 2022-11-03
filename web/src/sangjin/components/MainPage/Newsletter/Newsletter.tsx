import * as React from "react";
import NewsletterLink from "./NewsletterLink";
import "./Newsletter.css";

export type NewsletterType = {
  newsletter_id: string;
  title: string;
  thumbnail: string;
  url: string;
  hashtag: { hashtag_id: string; name: string }[];
  writer: string;
};

const Newsletter = (props: NewsletterType) => {
  return (
    <div>
      <div className="card_item">
        <div className="card_header">MBTI 뉴스레터</div>

        <div className="card_img">
          <a href={props.url}>
            <img
              src={props.thumbnail}
              alt="아마존 디자이너는 어떻게 포트폴리오를 만들까?의 콘텐츠 이미지"
              width="97%"
              height="184px"
              // width="auto"
              // height="auto"
            ></img>
          </a>
        </div>
        <div className="card_desc">
          <div className="card_title">
            <a href={props.url}>{props.title}</a>
          </div>
          <div className="card_text">
            <a href={props.url}>{props.writer}</a>
          </div>
          <div className="card_tag">
            {props.hashtag.map(function (i): JSX.Element {
              // console.log("I.........", i);
              return <span>#{i.name} </span>;
            })}
            {/* <a href={props.url}>#{props.hashtag}</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

<style scoped></style>;