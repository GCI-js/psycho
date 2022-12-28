import * as React from "react";

import "./MediumTitle.css";

interface IProps {
  text: String;
  customClass: string;
}

function MediumTitle(props: IProps) {
  return (
    <div className={props.customClass + " medium_title"}>{props.text}</div>
  );
}

export default MediumTitle;
