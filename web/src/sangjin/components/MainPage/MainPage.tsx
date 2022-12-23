import { platform } from "os";
import React, { useCallback, useEffect, useState } from "react";
import "./MainPage.css";
import Newsletter from "./Newsletter/Newsletter";
import { getNewsletterList } from "./Newsletter/NewsletterList";
import { Trend } from "./Trend";
import ChnageMBTI from "./ChangeMBTI";
import HashTag from "./HashtagSearchResult";
import { getRandomList, RandomListInit } from "./RandomList";
import HashtagSearchResult from "./HashtagSearchResult";
import MyBettingRecord from "./MyBettingRecord/MyBettingRecord";
import AttendanceCheck from "./AttendanceCheck/AttendanceCheck";
import TopHashtag from "./TopHashTag/TopHashtag";
export function MainPage() {
  let Newsletter_example: any[] = [];
  let RandomList: any[] = [];
  RandomList = getRandomList();

  let [result, setResult] = useState<any[]>([]);
  let [item, setItem] = useState<any[]>([]);
  let [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMoreData = async () => {
    console.log("fetchMoreData............");
    setIsLoading(true);
    // let tmp;
    // if (item.length >= 3) {
    console.log("item,,,,", item);
    let tmp = item.slice(0, 5);

    console.log("tmp........", tmp);
    // setResult([...result, ...tmp]);
    for (let i = 0; i < 5; i++) {
      if (tmp[i] != undefined) {
        result.push(tmp[i]);
      }
    }
    setResult([...result]);
    console.log("result........", result);

    // setItem([...item, ...item.slice(5)]);
    // let tmp2 = item.slice(5);
    // let newItems = [
    //   (item: any) =>
    //     item.filter((item: any, i: any) => {
    //       i >= 5;
    //     }),
    // ];
    // setItem([...tmp2]);
    item = item.slice(5);
    setIsLoading(false);
  };

  const _infiniteScroll = useCallback(() => {
    console.log("_infinite....");
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
  const getFetchData = async () => {
    console.log("getFetchData........");
    console.log("RandomList.....", RandomList);
    setResult([...RandomList.slice(0, 7)]);
    setItem([...RandomList.slice(7)]);
    setIsLoading(false);
  };

  useEffect(() => {
    // getFetchData();
    // RandomListInit();
    window.addEventListener("scroll", _infiniteScroll, true);
    return () => window.removeEventListener("scroll", _infiniteScroll, true);
  }, [_infiniteScroll]);
  useEffect(() => {
    RandomListInit();
    getFetchData();
  }, []);

  return (
    <div>
      <div className="header">뉴스피드</div>
      <div className="contents">
        {result.map(function (i): JSX.Element {
          console.log("result map i .............", i);
          if (i.type === "attendancecheck") {
            return <AttendanceCheck />;
          } else if (i.type === "changembti") {
            return <ChnageMBTI />;
          } else if (i.type === "mybettingrecord") {
            return <MyBettingRecord />;
          } else if (i.type === "hashtagsearchresult") {
            return <HashtagSearchResult />;
          } else if (i.type === "tophashtag") {
            return <TopHashtag />;
          } else {
            return (
              <Newsletter
                // key={i.data.newsletter_id}
                title={i.data.title}
                thumbnail={i.data.thumbnail}
                url={i.data.url}
                hashtag={i.data.hashtag}
                writer={i.data.writer}
                newsletter_id={i.data.newsletter_id}
              ></Newsletter>
            );
          }
        })}
      </div>
    </div>
  );
}
