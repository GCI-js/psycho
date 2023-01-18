import { useCallback, useEffect, useState } from "react";
import "./MainPage.css";
import { RandomListInit } from "../../service/randomList";
import Newsletter from "../Newsletter/Newsletter";

// import Newsletter from "../../@types/Newsletter";

export function MainPage() {
  let RandomList: any[] = [];
  let [result, setResult] = useState<any[]>([]);
  let [item, setItem] = useState<any[]>([]);
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
    <div>
      <div className="header">뉴스피드</div>
      <div className="contents">
        {result.map(function (i): JSX.Element {
          //result에 있는 컴포넌트 mainpage에 띄우기
          if (i.type === "changembti") {
            return <></>;
          } else if (i.type === "hashtagsearchresult") {
            return <></>;
          } else {
            return (
              <Newsletter
                title={i.data.title}
                thumbnail={i.data.thumbnail}
                url={i.data.url}
                hashtag={i.data.hashtag}
                writer={i.data.writer}
                newsletterId={i.data.newsletterId}
              ></Newsletter>
            );
          }
        })}
      </div>
    </div>
  );
}
