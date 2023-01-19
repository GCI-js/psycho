import React from "react";
import "./BasicButton.css";

interface BasicButtonInterface {
  content: string;
  pFunction: any;
}

const BasicButton = ({ content, pFunction }: BasicButtonInterface) => {
  console.log("XXX" + pFunction);
  return (
    <button className="basicButton" onClick={pFunction}>
      {content}
    </button>
  );
};

export default BasicButton;
