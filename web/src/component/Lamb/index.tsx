import * as React from "react";

import idiotproof from "../../service/idiotproof";
import shepherd from "../../service/shepherd";

import styles from "./index.module.scss";

interface PageProperties {
  // 라우팅 대상이 되는 각 페이지의 고유한 이름입니다. 이 값은 매핑 자료구조에서 키값으로 쓰입니다.
  "data-pose": string;
}
interface Properties_ extends React.PropsWithChildren, Properties {
  // 해당 라우터의 고유한 이름입니다. 이 값은 매핑 자료구조에서 키값으로 쓰입니다.
  "data-lamb": string;
  // 실제 라우팅 될 컴포넌트들을 인자로 받습니다.
  children: React.ReactElement<PageProperties>[];
  // 라우팅이 될 컴포넌트들에게 공통으로 적용될 클래스 이름입니다. 스타일링을 위해 쓰입니다.
  pageClassName?: string;
}

/*
라우터의 결과값을 보여주는 컴포넌트를 랜더링합니다.
여기서 라우팅이라 함은 서로 보여준다는 행위에서 배반사건의 관계성을 가지는
페이지들에 대한 제어를 의미합니다.
처음 랜더링하는 페이지는 '가상돔 => 실제돔의 전체 렌더링' 흐름으로 이어지고
두번째 랜더링하는 페이지는 '가상돔 => 실제돔의 display속성 변경' 흐름으로 이어집니다.
*/
export default function Lamb(properties: Properties_) {
  const id = [`_${idiotproof.trace(Lamb, "lamb")}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const lamb = properties["data-lamb"];
  shepherd.adopt(`lamb-${lamb}`, id);
  const ref: React.RefObject<HTMLDivElement> = React.useRef(null);
  const cl_name_ = properties.pageClassName;
  const children = properties.children;
  const ct = children.length;
  const names = Array(ct);
  const [pages, i2setPage] = [Array(ct), Array(ct)];
  for (let i = 0; i < ct; i++) {
    names[i] = children[i].props["data-pose"];
    [pages[i], i2setPage[i]] = React.useState(null);
  }
  React.useEffect(() => {
    const elems = ref.current.children;
    Array.from(elems).forEach((v) => v.classList.remove("on"));
    let i = names.indexOf(shepherd.readPoses()[lamb]);
    i = i < 0 ? 0 : i;
    elems[i].classList.add("on");
    if (pages[i] != children[i]) i2setPage[i](children[i]);
  });
  return (
    <div id={id} className={cl} ref={ref}>
      {pages.map((v, i) => (
        <div className={cl_name_} key={i}>
          {v}
        </div>
      ))}
    </div>
  );
}
