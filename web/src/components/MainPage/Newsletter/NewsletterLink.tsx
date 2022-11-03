import * as React from "react";

type MyCompProps = {
  link: string;
};

const NewsletterLink = (props: MyCompProps) => {
  return (
    <div>
      <iframe src={props.link}>
        <p>현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!</p>
      </iframe>
    </div>
  );
};

export default NewsletterLink;

<style scoped></style>;
