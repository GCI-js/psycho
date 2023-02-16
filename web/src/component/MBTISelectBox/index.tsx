import { useState } from "react";
import styles from "./index.module.scss";
import idiotproof from "../../service/idiotproof";
import MBTISelectFrame from "../../img/MBTISelectFrame.png";
import ButtonBox from "../ButtonBox";
interface MBTIStates {
  MBTI: string;
  state: boolean;
}

export const MBTISelectBox = (properties: Properties) => {
  const id = [`_${idiotproof.trace(MBTISelectBox)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  const [MBTIStates, setMBTIStates] = useState<MBTIStates[]>([
    { MBTI: "E", state: false },
    { MBTI: "S", state: false },
    { MBTI: "T", state: false },
    { MBTI: "J", state: false },
    { MBTI: "I", state: false },
    { MBTI: "N", state: false },
    { MBTI: "F", state: false },
    { MBTI: "P", state: false },
  ]);

  const handleMBTISelectBox = (MBTI: string) => {
    let newMBTIState = MBTIStates.map((MBTIState) => {
      if (MBTIState.MBTI === MBTI) {
        return { MBTI: MBTIState.MBTI, state: !MBTIState.state };
      } else {
        return { MBTI: MBTIState.MBTI, state: MBTIState.state };
      }
    });
    if (MBTI === "E" && newMBTIState[0].state && newMBTIState[4].state) {
      newMBTIState[4].state = false; // I
    } else if (MBTI === "S" && newMBTIState[1].state && newMBTIState[5].state) {
      newMBTIState[5].state = false; // N
    } else if (MBTI === "T" && newMBTIState[2].state && newMBTIState[6].state) {
      newMBTIState[6].state = false; // F
    } else if (MBTI === "J" && newMBTIState[3].state && newMBTIState[7].state) {
      newMBTIState[7].state = false; // P
    } else if (MBTI === "I" && newMBTIState[4].state && newMBTIState[0].state) {
      newMBTIState[0].state = false; // E
    } else if (MBTI === "N" && newMBTIState[5].state && newMBTIState[1].state) {
      newMBTIState[1].state = false; // S
    } else if (MBTI === "F" && newMBTIState[6].state && newMBTIState[2].state) {
      newMBTIState[2].state = false; // T
    } else if (MBTI === "P" && newMBTIState[7].state && newMBTIState[3].state) {
      newMBTIState[3].state = false; // J
    }

    setMBTIStates([...newMBTIState]);
  };

  return (
    <div
      id={id}
      className={cl}
      style={{
        background: `url(${MBTISelectFrame}) rgba(118, 118, 128, 0.24)`,
      }}
    >
      {MBTIStates.map((el) => {
        return (
          <ButtonBox
            state={el.state}
            setState={handleMBTISelectBox}
            content={el.MBTI}
          />
        );
      })}
    </div>
  );
};
