import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionContent from "../QuestionContent";
import imgRocket3d from "./images/rocket_3d.svg";
import "./QuestionToday.css";
import { questionList } from "../../resource/question";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";
import QuestionButton from "../QuestionButton";
import { getInitUserData } from "../../service/getInitUserData";

/**
 * 오늘의 질문
 * @returns
 */
const QuestionToday = (properties: Properties) => {
  const [questionData, setQuestionData] = useState({
    ...questionList[0],
    image: imgRocket3d,
  });
  const [questionOrder, setquestionOrder] = useState(0);
  const id = [`_${idiotproof.trace(QuestionContent)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  const curr = new Date().toLocaleDateString();
  console.log("current....", curr);
  let _limit = questionList.length;

  useEffect(() => {
    Datainit();
  }, []);
  const Datainit = () => {
    //처음 데이터 뿌리기
    if (localStorage.getItem("lastDate") === null) {
      //첫 접속
      console.log(curr);
      localStorage.setItem("lastDate", curr); //마지막 방문일
      localStorage.setItem("questionOrder", "0"); //질문 순서
      localStorage.setItem("visitCount", "0"); //방문 일수 (질문 뿌리기 위함)
    } else if (localStorage.getItem("lastDate") != curr) {
      //여러날 방문시
      localStorage.setItem("lastDate", curr);
      localStorage.setItem("questionOrder", "0");
      let _count = parseInt(localStorage.getItem("visitCount")) + 1;
      localStorage.setItem("visitCount", _count.toString());
      setQuestionData({
        ...questionList[(_count * 5) % _limit],
        image: imgRocket3d,
      });
      console.log("count....." + _count);
    } else if (localStorage.getItem("lastDate") === curr) {
      // 같은 날 여러번 접속시
      setquestionOrder(parseInt(localStorage.getItem("questionOrder")));
      // let _order = parseInt(localStorage.getItem("questionOrder"));
      let _count = parseInt(localStorage.getItem("visitCount"));
      setQuestionData({
        ...questionList[(questionOrder + _count * 5) % _limit],
        image: imgRocket3d,
      });
      if (questionOrder === 5) {
        shepherd.whip("test", "QuestionEnd");
      }
    }
  };

  const buttionClicked = () => {
    let _tmpOrder = parseInt(localStorage.getItem("questionOrder")) + 1;
    localStorage.setItem("questionOrder", _tmpOrder.toString());
    setquestionOrder(_tmpOrder);
    // let _order = parseInt(localStorage.getItem("questionOrder"));
    let _count = parseInt(localStorage.getItem("visitCount"));
    setQuestionData({
      ...questionList[(_tmpOrder + _count * 5) % _limit],
      image: imgRocket3d,
    });
    if (_tmpOrder == 5) {
      shepherd.whip("test", "QuestionEnd");
    }
  };
  const agreeClicked = () => {
    let tmp: any = localStorage.getItem("userData");
    if (tmp != null) tmp = JSON.parse(tmp);
    let lasttmp: any = tmp.mbtis[0];
    if (questionOrder === 0 && lasttmp.date != curr) {
      lasttmp.date = curr;
    } else {
      tmp.mbtis.shift();
    }
    lasttmp[questionData.factor] += questionData.value;
    tmp.mbtis.unshift(lasttmp);
    localStorage.setItem("userData", JSON.stringify(tmp));
  };

  const disagreeClicked = () => {
    let tmp: any = localStorage.getItem("userData");
    if (tmp != null) tmp = JSON.parse(tmp);
    let lasttmp: any = tmp.mbtis[0];
    if (questionOrder === 0 && lasttmp.date != curr) {
      lasttmp.date = curr;
    } else {
      tmp.mbtis.shift();
    }
    lasttmp[questionData.factor] -= questionData.value;
    tmp.mbtis.unshift(lasttmp);
    localStorage.setItem("userData", JSON.stringify(tmp));
  };

  const agreeButtion = () => {
    agreeClicked();
    buttionClicked();
    //MBTI 유형별 value 계산하기
  };
  const disagreeButtion = () => {
    disagreeClicked();
    buttionClicked();
    //MBTI 유형별 value 계산하기
  };

  const skipButtion = () => {
    buttionClicked();
  };
  return (
    <div id={id} className={cl}>
      <div className="QuestionContentPage">
        <div className="QuestionContentPageTitle LargeTitle">오늘의 질문</div>
        <div className="">
          <img src={questionData.image} alt="rocket3d" />
        </div>
        <div className="QuestionContentRemained">
          <div className="QuestionContentColumn">
            이번주 질문이 {5 - questionOrder}개 남았어요
          </div>
          <div className="QuestionContentColumn" onClick={skipButtion}>
            skip
          </div>
        </div>
        <div className="QuestionContentQuestionTitle LargeTitle">
          {questionOrder + 1 + "번째 질문(" + (questionOrder + 1) + "/5)"}
        </div>
        <div className="QuestionContentQuestionBody">
          {questionData.context}
        </div>
        <QuestionButton
          text1="그렇다"
          onClick1={agreeButtion}
          text2="그렇지않다"
          onClick2={disagreeButtion}
        />
      </div>
    </div>
  );
};

export default QuestionToday;
