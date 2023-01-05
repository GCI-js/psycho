import * as React from "react";
import NewsletterLink from "./NewsletterLink";
import "./Newsletter.css";
import icon from "./icon_newsletter.png";
export type NewsletterType = {
	newsletterId: string;
	thumbnail: string;
	title: string;
	hashtag: { hashtag_id: string; name: string }[];
	url: string;
	writer: string;
};

const Newsletter = (props: NewsletterType) => {
	return (
		<div>
			<div className="newletter_card_item">
				<div className="newletter_card_header">MBTI 뉴스레터</div>
				<div className="newletter_card_img">
					<a href={props.url}>
						<img
							src={props.thumbnail}
							alt="아마존 디자이너는 어떻게 포트폴리오를 만들까?의 콘텐츠 이미지"
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
						{/* <div className="card_text">
              <a href={props.url}>{props.writer}</a>
            </div> */}
						<div className="newletter_card_tag">
							{props.hashtag.map(function (i): JSX.Element {
								// console.log("I.........", i);
								return (
									<span className="newletter_card_tag_name">#{i.name} </span>
								);
							})}
							{/* <a href={props.url}>#{props.hashtag}</a> */}
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
