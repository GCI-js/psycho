import { platform } from "os";
import React, { useCallback, useEffect, useState } from "react";
import "./Main.css";
import Newsletter from "./Newsletter";
import { getNewsletterList, Newsletter_example } from "./NewsletterList";
import { Trend } from "./Trend";
import ChnageMBTI from "./ChangeMBTI";
import HashTag from "./HashTag";
import { getRandomList } from "./RandomList";

export function Main() {
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
  const getFetcheData = async () => {
    Newsletter_example = getNewsletterList();

    setResult([...Newsletter_example.slice(0, 3)]);
    setItem([...Newsletter_example.slice(3)]);
    setIsLoading(false);
  };
  useEffect(() => {
    getFetcheData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", _infiniteScroll, true);
    return () => window.removeEventListener("scroll", _infiniteScroll, true);
  }, [_infiniteScroll]);
  return (
    <div>
      <div className="header">뉴스피드</div>

      <Trend></Trend>
      <ChnageMBTI></ChnageMBTI>
      {result.map(function (i: {
        id: number;
        title: string;
        image: string;
        url: string;
        text: string;
        tag: string;
      }): JSX.Element {
        return (
          <Newsletter
            key={i.id}
            title={i.title}
            image={i.image}
            url={i.url}
            text={i.text}
            tag={i.tag}
          ></Newsletter>
        );
      })}
    </div>
  );
}
