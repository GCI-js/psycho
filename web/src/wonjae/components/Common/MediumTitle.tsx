import * as React from "react";

import "./MediumTitle.css";

interface IProps {
  text: String;

  // css class 중복 적용 시키기 위함
  customClass: string;
}

function MediumTitle(props: IProps) {
  return (
    <div className={props.customClass + " medium_title"}>{props.text}</div>
  );
}

export default MediumTitle;
