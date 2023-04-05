import React, { Component, PureComponent, useState, useEffect } from "react";
// import QuestionButton from "../QuestionButton";
import QuestionEnd from "../QuestionEnd";
import QuestionToday from "../QuestionToday";
import QuestionPast from "../QuestionPast";
import QuestionSpecialPage from "../QuestionSpecialPage";

// import QuestionPopupPast from "../QuestionPopupPast/QuestionPopupPast";

/**
 * 오늘의 질문을 확인하는 질문 페이지.
 * 현재는 더미로 모든 개발된 페이지를 보여줌
 * @returns
 */
const QuestionPage = () => {
  return (
    <div>
      {/* <QuestionSpecialPage /> */}
      <QuestionToday />
      {/* <QuestionEnd />
      <QuestionPast /> */}
      {/* <QuestionPopupPast /> */}
    </div>
  );
};

export default QuestionPage;
