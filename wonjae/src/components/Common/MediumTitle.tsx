import react from "react";
import "./MediumTitle.css";

interface IProps {
  text: String;
}

function MediumTitle(props: IProps) {
  return <div className="medium_title">{props.text}</div>;
}

export default MediumTitle;
