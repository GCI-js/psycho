import { platform } from "os";
import React, { useCallback, useEffect, useState } from "react";
import "./MainPage.css";
import Newsletter from "./Newsletter";
import { getNewsletterList } from "./NewsletterList";
import { Trend } from "./Trend";
import ChnageMBTI from "./ChangeMBTI";
import HashTag from "./HashtagSearchResult";
import { getRandomList, RandomListInit } from "./RandomList";
import HashtagSearchResult from "./HashtagSearchResult";

export function MainPage() {
  let Newsletter_example: any[] = [];
  let RandomList: any[] = [];
  RandomList = getRandomList();
  const [result, setResult] = useState<any[]>([]);
  const [item, setItem] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMoreData = async () => {
    console.log("fetchMoreData............");
    setIsLoading(true);
    // console.log("result........", result);
    let tmp = [...result.concat(item.slice(0, 3))];
    // console.log("tmp........", tmp);

    setResult(tmp);
    setItem(item.slice(3));
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
    Newsletter_example = getNewsletterList();

    setResult([...RandomList.slice(0, 5)]);
    setItem([...RandomList.slice(5)]);
    setIsLoading(false);
  };
  useEffect(() => {
    getFetchData();
    RandomListInit();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", _infiniteScroll, true);
    return () => window.removeEventListener("scroll", _infiniteScroll, true);
  }, [_infiniteScroll]);
  return (
    <div>
      <div className="header">뉴스피드</div>

      {/* <Trend></Trend>
      <ChnageMBTI></ChnageMBTI> */}
      <div className="contents">
        {result.map(function (i): JSX.Element {
          console.log("result map i .............", i);
          if (i.type === "newsletter") {
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
          } else if (i.type === "changembti") {
            return <ChnageMBTI></ChnageMBTI>;
          } else if (i.type === "hashtagsearchresult") {
            return <HashtagSearchResult></HashtagSearchResult>;
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
