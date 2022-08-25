import { platform } from "os";
import * as React from "react";
import "./Main.css";
import Newsletter from "./Newsletter";
import { Trend } from "./Trend";

const Newsletter_example = [
  {
    id: 0,
    title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?",
    image:
      "https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
    url: "https://surfit.io/link/yRXDa",
    text: "인터렉션에&nbsp;자신이&nbsp;있다면&nbsp;이렇게&nbsp;만들면&nbsp;되는구나라는&nbsp;생각이&nbsp;들게하는&nbsp;포트폴리오였습니다. 또한&nbsp;엄청난&nbsp;UI가&nbsp;들어가진&nbsp;않았지만&nbsp;기본기가&nbsp;충분한&nbsp;기본기를&nbsp;갖춘&nbsp;그래픽입니다. 이&nbsp;프로젝트에서&nbsp;가장&nbsp;놀라웠던&nbsp;점은&nbsp;사용자&nbsp;리서치에서&nbsp;뽑은&nbsp;인사이트를&nbsp;실제&nbsp;프로덕트로&nbsp;연결하는&nbsp;능력입니다. 상상하지&nbsp;못한&nbsp;방식으로&nbsp;솔루션이&nbsp;도출하여&nbsp;이&nbsp;분에&nbsp;대한&nbsp;경외감이&nbsp;들었습니다.# I",
    tag: "UI/UX",
  },
  {
    id: 1,
    title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?",
    image:
      "https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
    url: "https://surfit.io/link/yRXDa",
    text: "인터렉션에&nbsp;자신이&nbsp;있다면&nbsp;이렇게&nbsp;만들면&nbsp;되는구나라는&nbsp;생각이&nbsp;들게하는&nbsp;포트폴리오였습니다. 또한&nbsp;엄청난&nbsp;UI가&nbsp;들어가진&nbsp;않았지만&nbsp;기본기가&nbsp;충분한&nbsp;기본기를&nbsp;갖춘&nbsp;그래픽입니다. 이&nbsp;프로젝트에서&nbsp;가장&nbsp;놀라웠던&nbsp;점은&nbsp;사용자&nbsp;리서치에서&nbsp;뽑은&nbsp;인사이트를&nbsp;실제&nbsp;프로덕트로&nbsp;연결하는&nbsp;능력입니다. 상상하지&nbsp;못한&nbsp;방식으로&nbsp;솔루션이&nbsp;도출하여&nbsp;이&nbsp;분에&nbsp;대한&nbsp;경외감이&nbsp;들었습니다.# I",
    tag: "UI/UX",
  },
  {
    id: 2,
    title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?",
    image:
      "https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
    url: "https://surfit.io/link/yRXDa",
    text: "인터렉션에&nbsp;자신이&nbsp;있다면&nbsp;이렇게&nbsp;만들면&nbsp;되는구나라는&nbsp;생각이&nbsp;들게하는&nbsp;포트폴리오였습니다. 또한&nbsp;엄청난&nbsp;UI가&nbsp;들어가진&nbsp;않았지만&nbsp;기본기가&nbsp;충분한&nbsp;기본기를&nbsp;갖춘&nbsp;그래픽입니다. 이&nbsp;프로젝트에서&nbsp;가장&nbsp;놀라웠던&nbsp;점은&nbsp;사용자&nbsp;리서치에서&nbsp;뽑은&nbsp;인사이트를&nbsp;실제&nbsp;프로덕트로&nbsp;연결하는&nbsp;능력입니다. 상상하지&nbsp;못한&nbsp;방식으로&nbsp;솔루션이&nbsp;도출하여&nbsp;이&nbsp;분에&nbsp;대한&nbsp;경외감이&nbsp;들었습니다.# I",
    tag: "UI/UX",
  },
  {
    id: 3,
    title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?",
    image:
      "https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
    url: "https://surfit.io/link/yRXDa",
    text: "인터렉션에&nbsp;자신이&nbsp;있다면&nbsp;이렇게&nbsp;만들면&nbsp;되는구나라는&nbsp;생각이&nbsp;들게하는&nbsp;포트폴리오였습니다. 또한&nbsp;엄청난&nbsp;UI가&nbsp;들어가진&nbsp;않았지만&nbsp;기본기가&nbsp;충분한&nbsp;기본기를&nbsp;갖춘&nbsp;그래픽입니다. 이&nbsp;프로젝트에서&nbsp;가장&nbsp;놀라웠던&nbsp;점은&nbsp;사용자&nbsp;리서치에서&nbsp;뽑은&nbsp;인사이트를&nbsp;실제&nbsp;프로덕트로&nbsp;연결하는&nbsp;능력입니다. 상상하지&nbsp;못한&nbsp;방식으로&nbsp;솔루션이&nbsp;도출하여&nbsp;이&nbsp;분에&nbsp;대한&nbsp;경외감이&nbsp;들었습니다.# I",
    tag: "UI/UX",
  },
  {
    id: 4,
    title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?",
    image:
      "https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
    url: "https://surfit.io/link/yRXDa",
    text: "인터렉션에&nbsp;자신이&nbsp;있다면&nbsp;이렇게&nbsp;만들면&nbsp;되는구나라는&nbsp;생각이&nbsp;들게하는&nbsp;포트폴리오였습니다. 또한&nbsp;엄청난&nbsp;UI가&nbsp;들어가진&nbsp;않았지만&nbsp;기본기가&nbsp;충분한&nbsp;기본기를&nbsp;갖춘&nbsp;그래픽입니다. 이&nbsp;프로젝트에서&nbsp;가장&nbsp;놀라웠던&nbsp;점은&nbsp;사용자&nbsp;리서치에서&nbsp;뽑은&nbsp;인사이트를&nbsp;실제&nbsp;프로덕트로&nbsp;연결하는&nbsp;능력입니다. 상상하지&nbsp;못한&nbsp;방식으로&nbsp;솔루션이&nbsp;도출하여&nbsp;이&nbsp;분에&nbsp;대한&nbsp;경외감이&nbsp;들었습니다.# I",
    tag: "UI/UX",
  },
];
export function Main() {
  // console.log(Newsletter_example);
  return (
    <div>
      <div className="header">뉴스피드</div>
      {Newsletter_example.map(function (i): JSX.Element {
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
      <Trend></Trend>
    </div>
  );
}
