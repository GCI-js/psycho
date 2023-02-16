import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";

interface Props extends Properties {
  state: boolean;
  content: string;
  setState: any;
}
const ButtonBox = (properties: Props) => {
  const id = [`_${idiotproof.trace(ButtonBox)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  let selected = "";
  if (properties.state) {
    selected = " selected";
  } else {
    selected = " notSelected";
  }
  return (
    <div id={id} className={cl}>
      <button
        className={`buttonBox${selected}`}
        onClick={() => {
          properties.setState(properties.content);
        }}
      >
        {properties.content}
      </button>
    </div>
  );
};

export default ButtonBox;
