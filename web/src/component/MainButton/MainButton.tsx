import "./MainButton.css";

interface IProps {
  text: String;
  onClick: () => void;
  isAgreed?: Boolean;
}

function MainButton({ text, isAgreed = true, onClick }: IProps) {
  return (
    <div
      className={`main_btn ${isAgreed ? "enabled" : "disabled"}`}
      onClick={onClick}
    >
      <div className="main_btn_txt">{text}</div>
    </div>
  );
}

export default MainButton;
