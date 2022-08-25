import * as React from "react";

type MyCompProps = {
  title: string;
  text: string;
  image: string;
  url: string;
  tag: string;
  key: number;
};

const Newsletter = (props: MyCompProps) => {
  return (
    <div>
      <div className="card-item">
        <div className="card_img">
          <a href={props.url}>
            <div>
              <img
                src={props.image}
                alt="아마존 디자이너는 어떻게 포트폴리오를 만들까?의 콘텐츠 이미지"
              ></img>
            </div>
          </a>
        </div>
        <div className="card_desc">
          <div className="card_title">
            <a href={props.url}>{props.title}</a>
          </div>
          <div className="card_text">
            <a href={props.url}>{props.text}</a>
          </div>
          <div className="card_tag">
            <a href={props.url}>{props.tag}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
