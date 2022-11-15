import React, { useState } from "react";
import "./EditUserInfo.css";
// import DropDown from "./Dropdown";
import BasicButton from "../../Common/BasicButton";
const EditUserInfo = () => {
  const dummyUserName = "아크릴오므라이스";

  const handleIsEditUserInfo = () => {};
  const [selectedNation, setSelectedNation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedBirthYear, setSelectedBirthYear] = useState("");
  const [selectedBirthMonth, setSelectedBirthMonth] = useState("");
  const [selectedBirthDay, setSelectedBirthDay] = useState("");

  const handleChangeNation = (event: any) => {
    setSelectedNation(event.target.value);
  };
  const handleChangeCity = (event: any) => {
    setSelectedCity(event.target.value);
  };
  const handleChangeDistrict = (event: any) => {
    setSelectedDistrict(event.target.value);
  };
  const handleChangeGender = (event: any) => {
    setSelectedGender(event.target.value);
  };
  const handleChangeBirthYear = (event: any) => {
    setSelectedBirthYear(event.target.value);
  };
  const handleChangeBirthMonth = (event: any) => {
    setSelectedBirthMonth(event.target.value);
  };
  const handleChangeBirthDay = (event: any) => {
    setSelectedBirthDay(event.target.value);
  };
  const nationOption = [
    { value: "", name: "국가", disabled: true },
    { value: "korea", name: "대한민국" },
    { value: "usa", name: "미국" },
  ];
  const cityOption = [
    { value: "", name: "시", disabled: true },
    { value: "seoul", name: "서울" },
    { value: "busan", name: "부산" },
  ];
  const districtOption = [
    { value: "", name: "구", disabled: true },
    { value: "gangnam", name: "강남" },
    { value: "seocho", name: "서초" },
    { value: "mapo", name: "마포" },
  ];
  const genderOption = [
    { value: "", name: "성별", disabled: true },
    { value: "male", name: "남자" },
    { value: "female", name: "여자" },
  ];
  const birthYearOption = [
    { value: "", name: "년", disabled: true },
    { value: "1992", name: "1992" },
    { value: "1993", name: "1993" },
    { value: "1994", name: "1994" },
    { value: "1995", name: "1995" },
    { value: "1996", name: "1996" },
    { value: "1997", name: "1997" },
  ];
  const birthMonthOption = [
    { value: "", name: "월", disabled: true },
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" },
    { value: "6", name: "6" },
    { value: "7", name: "7" },
    { value: "8", name: "8" },
    { value: "9", name: "9" },
    { value: "10", name: "10" },
    { value: "11", name: "11" },
    { value: "12", name: "12" },
  ];
  const birthDayOption = [
    { value: "", name: "일", disabled: true },
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" },
    { value: "6", name: "6" },
    { value: "7", name: "7" },
    { value: "8", name: "8" },
    { value: "9", name: "9" },
    { value: "10", name: "10" },
    { value: "11", name: "11" },
    { value: "12", name: "12" },
  ];
  return (
    <div className="editUserInfoContainer">
      <div className="username">{`@${dummyUserName}`}</div>
      <div className="choiceText">{`태어난 나라를 골라주세요\n`}</div>
      <select
        className="selectBox"
        value={selectedNation}
        onChange={handleChangeNation}
      >
        {nationOption.map((option) => (
          <option
            value={option.value}
            defaultValue="국가"
            disabled={option.disabled}
          >
            {option.name}
          </option>
        ))}
      </select>
      <div className="choiceText">{`거주하는 시, 구를 선택해주세요\n`}</div>
      <div className="choiceResidence">
        <select
          className="selectBox"
          value={selectedCity}
          onChange={handleChangeCity}
        >
          {cityOption.map((option) => (
            <option
              value={option.value}
              defaultValue="시"
              disabled={option.disabled}
            >
              {option.name}
            </option>
          ))}
        </select>
        <select
          className="selectBox"
          value={selectedDistrict}
          onChange={handleChangeDistrict}
        >
          {districtOption.map((option) => (
            <option
              value={option.value}
              defaultValue="구"
              disabled={option.disabled}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="choiceText">{`성별을 선택해주세요\n`}</div>
      <select
        className="selectBox"
        value={selectedGender}
        onChange={handleChangeGender}
      >
        {genderOption.map((option) => (
          <option
            value={option.value}
            defaultValue="성별"
            disabled={option.disabled}
          >
            {option.name}
          </option>
        ))}
      </select>
      <div className="choiceText">{`생년월일을 선택해주세요\n`}</div>
      <div className="choiceBirth">
        <select
          className="selectBox"
          value={selectedBirthYear}
          onChange={handleChangeBirthYear}
        >
          {birthYearOption.map((option) => (
            <option
              value={option.value}
              defaultValue="년"
              disabled={option.disabled}
            >
              {option.name}
            </option>
          ))}
        </select>
        <select
          className="selectBox"
          value={selectedBirthMonth}
          onChange={handleChangeBirthMonth}
        >
          {birthMonthOption.map((option) => (
            <option
              value={option.value}
              defaultValue="월"
              disabled={option.disabled}
            >
              {option.name}
            </option>
          ))}
        </select>
        <select
          className="selectBox"
          value={selectedBirthDay}
          onChange={handleChangeBirthDay}
        >
          {birthDayOption.map((option) => (
            <option
              value={option.value}
              defaultValue="일"
              disabled={option.disabled}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <BasicButton content="계속" pFunction={handleIsEditUserInfo} />
    </div>
  );
};

export default EditUserInfo;
