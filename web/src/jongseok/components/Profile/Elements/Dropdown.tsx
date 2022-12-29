import React from "react";

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
