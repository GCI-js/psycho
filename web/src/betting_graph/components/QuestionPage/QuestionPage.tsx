import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton/QuestionButton";
import QuestionEnd from "../QuestionEnd/QuestionEnd";
import QuestionToday from "../QuestionToday/QuestionToday";
import QuestionPopupPast from "../QuestionPopupPast/QuestionPopupPast";
import QuestionPopupInsufficientBalance from "../QuestionPopupInsufficientBalance/QuestionPopupInsufficientBalance";
import QuestionPast from "../QuestionPast/QuestionPast";

const QuestionPage = () => {
  return (
    <div>
      <QuestionToday />
      <QuestionEnd />
      <QuestionPopupPast />
      <QuestionPopupInsufficientBalance />
      <QuestionPast />
    </div>
  );
};

export default QuestionPage;
