import React from "react";

/*
[2022.01.12 jongseok lee] 
Dropdown Component입니다. 드롭다운메뉴 클릭시 아래에 컨텐츠들 펼쳐지는 것만 구현되어있습니다. 
애니메이션이 생각보다 안이뻐서 iOS기본 select box처럼 화면 하단에서 스크롤로 선택할 수 있는 방법으로 바꿀까 고민중이었습니다.
클릭시 iOS 기본 스크롤 선택박스로 구현해도 되는 것은 디자이너에게 컨펌 받았습니다.
*/
const Dropdown = (props: any) => {
  const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
  const [repeat, setRepeat] = React.useState(null);

  //useEffect를 이용해서 Dropdown Animation 구현
  React.useEffect(() => {
    if (props.visibility) {
      //repeat에서 설정한 만큼 dorpdown cleartime set
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        //dropdown이 사라지는 시간 설정
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 400)
      );
    }
  }, [props.visibility]);

  return (
    <article
      className={`components-dropdown ${
        props.visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
      }`}
    >
      {visibilityAnimation && props.children}
    </article>
  );
};

export default Dropdown;
