import bloodTypeSelectFrame from "../../img/bloodTypeSelectFrame.png";
import idiotproof from "../../service/idiotproof";
import ButtonBox from "../ButtonBox";
import styles from "./index.module.scss";

interface BloodTypeStates {
  bloodType: string;
  state: boolean;
}

interface Props extends Properties {
  bloodTypeStates: BloodTypeStates[];
  setBloodTypeStates: Function;
}

export const BloodTypeSelectBox = (properties: Props) => {
  const id = [`_${idiotproof.trace(BloodTypeSelectBox)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  const handleBloodTypeSelectBox = (bloodType: string) => {
    let newBloodTypeStates = properties.bloodTypeStates.map(
      (bloodTypeState) => {
        if (bloodTypeState.bloodType === bloodType) {
          return {
            bloodType: bloodTypeState.bloodType,
            state: !bloodTypeState.state,
          };
        } else {
          return {
            bloodType: bloodTypeState.bloodType,
            state: bloodTypeState.state,
          };
        }
      }
    );
    if (
      bloodType === "A" &&
      newBloodTypeStates[0].state &&
      (newBloodTypeStates[1].state ||
        newBloodTypeStates[2].state ||
        newBloodTypeStates[3].state)
    ) {
      newBloodTypeStates[1].state = false;
      newBloodTypeStates[2].state = false;
      newBloodTypeStates[3].state = false;
    } else if (
      bloodType === "B" &&
      newBloodTypeStates[1].state &&
      (newBloodTypeStates[0].state ||
        newBloodTypeStates[2].state ||
        newBloodTypeStates[3].state)
    ) {
      newBloodTypeStates[0].state = false;
      newBloodTypeStates[2].state = false;
      newBloodTypeStates[3].state = false;
    } else if (
      bloodType === "AB" &&
      newBloodTypeStates[2].state &&
      (newBloodTypeStates[0].state ||
        newBloodTypeStates[1].state ||
        newBloodTypeStates[3].state)
    ) {
      newBloodTypeStates[0].state = false;
      newBloodTypeStates[1].state = false;
      newBloodTypeStates[3].state = false;
    } else if (
      bloodType === "O" &&
      newBloodTypeStates[3].state &&
      (newBloodTypeStates[0].state ||
        newBloodTypeStates[1].state ||
        newBloodTypeStates[2].state)
    ) {
      newBloodTypeStates[0].state = false;
      newBloodTypeStates[1].state = false;
      newBloodTypeStates[2].state = false;
    }
    properties.setBloodTypeStates([...newBloodTypeStates]);
  };
  return (
    <div
      id={id}
      className={cl}
      style={{
        background: `url(${bloodTypeSelectFrame}) rgba(118, 118, 128, 0.24)`,
      }}
    >
      {properties.bloodTypeStates.map((el, index) => {
        return (
          <ButtonBox
            key={index}
            state={el.state}
            setState={handleBloodTypeSelectBox}
            content={el.bloodType}
          />
        );
      })}
    </div>
  );
};
