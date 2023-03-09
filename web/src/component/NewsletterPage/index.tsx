import { useCallback, useEffect, useState } from "react";
import { RandomListInit, RandomType } from "../../service/randomList";
import Newsletter from "../Newsletter/";

import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import Setting from "../Setting";
import styles from "./index.module.scss";
import { newsletter } from "../../resource/newsletter";

export const NewsletterPage = (properties: Properties) => {
  const id = [`_${idiotproof.trace(Setting)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  const [newsletters, setNewsletters] = useState();

  if (!localStorage.getItem("isOldUser")) {
    shepherd.whip("test", "WelcomePage");
  }
  let RandomList: RandomType[] = [];
  let [result, setResult] = useState<RandomType[]>([]);
  let [item, setItem] = useState<RandomType[]>([]);
  let [isLoading, setIsLoading] = useState<boolean>(true);

  const getFetchData = async () => {
    // randomList에서 화면에 띄울 데이터(Result)에 넣고 나머지는 Item에 저장
    setResult([...RandomList.slice(0, 7)]);
    setItem([...RandomList.slice(7)]);
    setIsLoading(false);
  };

  const fetchMoreData = async () => {
    //스크롤 다운했을때 Item에서 7개씩 빼서 Result에 추가
    setIsLoading(true);
    let tmp = item.slice(0, 7);
    for (let i = 0; i < 7; i++) {
      if (tmp[i] != undefined) {
        result.push(tmp[i]);
      }
    }
    setResult([...result]);
    item = item.slice(7);
    setIsLoading(false);
  };

  const _infiniteScroll = useCallback(() => {
    //스크롤 이벤트
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;
    scrollHeight -= 10;
    if (scrollTop + clientHeight >= scrollHeight && isLoading === false) {
      fetchMoreData();
    }
  }, [isLoading]);

  useEffect(() => {
    //스크롤 이벤트 등록
    window.addEventListener("scroll", _infiniteScroll, true);
    return () => window.removeEventListener("scroll", _infiniteScroll, true);
  }, [_infiniteScroll]);

  useEffect(() => {
    //페이지 랜더링시 실행될 function
    RandomList = RandomListInit();
    getFetchData();
  }, []);
  return (
    <div id={id} className={cl}>
      <div
        className="large-title"
        onClick={() => shepherd.whip("test", "WelcomePage")}
      >
        뉴스피드
      </div>
      <div className="page-contents">
        {newsletter.map(function (e): JSX.Element {
          return (
            <Newsletter
              title={e.title}
              thumbnail={e.thumbnail}
              link={e.link}
              hashtag={e.hashtag}
              writer={e.writer}
              newsletterId={e.newsletterId}
            ></Newsletter>
          );
        })}
      </div>
    </div>
  );
};
