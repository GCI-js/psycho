import React, { useEffect, useState } from "react";
import MainButton from "../MainButton/MainButton";
import styles from "./index.module.scss";
import Dropdown from "../DropDown";
import downwardArrow from "../../img/downwardArrow.png";
import selectNation from "../../img/selectNation.png";
import selectCity from "../../img/selectCity.png";
import selectDistrict from "../../img/selectDistrict.png";
import selectGender from "../../img/selectGender.png";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import ArrowLeft from "../../img/Arrow_left.png";
import { getInitUserData } from "../../service/getInitUserData";
import { User } from "../../@types/User";

const RegisterPage2 = (properties: Properties) => {
  /*
[2022.01.12 jongseok lee] 
username 백엔드 로직 쓰면되고 OptionData는 어떤 옵션 들어가야하는지 정확히 정해지면 따로 다른 파일로 빼는게 더 나을거 같습니다. 
포맷 참고를 위해 코드는 남겨둡니다.
*/
  const id = [`_${idiotproof.trace(RegisterPage2)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  // let userData: User = localStorage.getItem("userData");
  // if (userData == null) userData = getInitUserData();
  const dummyUserName = "아크릴오므라이스";

  const nationOptionData = [
    { key: 1, value: "대한민국" },
    { key: 2, value: "미국" },
    { key: 3, value: "일본" },
  ];
  const cityOptionData = [
    { key: 1, value: "서울" },
    { key: 2, value: "부산" },
    { key: 3, value: "대구" },
    { key: 3, value: "대전" },
  ];
  const districtOptionData = [
    { key: 1, value: "마포" },
    { key: 2, value: "강남" },
    { key: 3, value: "서대문" },
    { key: 3, value: "서초" },
  ];
  const genderOptionData = [
    { key: 1, value: "남자" },
    { key: 2, value: "여자" },
    { key: 3, value: "레즈비언" },
    { key: 4, value: "게이" },
    { key: 5, value: "양성애자" },
    { key: 6, value: "트렌스젠더" },
  ];
  const birthYearOptionData = [
    { key: 1, value: "1992" },
    { key: 2, value: "1993" },
    { key: 3, value: "1994" },
    { key: 4, value: "1995" },
    { key: 5, value: "1996" },
    { key: 6, value: "1997" },
    { key: 7, value: "1998" },
    { key: 8, value: "1999" },
  ];
  const birthMonthOptionData = [
    { key: 1, value: "01" },
    { key: 2, value: "02" },
    { key: 3, value: "03" },
    { key: 4, value: "04" },
    { key: 5, value: "05" },
    { key: 6, value: "06" },
    { key: 7, value: "07" },
    { key: 8, value: "08" },
    { key: 9, value: "09" },
    { key: 10, value: "10" },
    { key: 11, value: "11" },
    { key: 12, value: "12" },
  ];
  const birthDayOptionData = [
    { key: 1, value: "01" },
    { key: 2, value: "02" },
    { key: 3, value: "03" },
    { key: 4, value: "04" },
    { key: 5, value: "05" },
    { key: 6, value: "06" },
    { key: 7, value: "07" },
    { key: 8, value: "08" },
    { key: 9, value: "09" },
    { key: 10, value: "10" },
    { key: 11, value: "11" },
    { key: 12, value: "12" },
    { key: 31, value: "31" },
  ];

  const [isAllSelected, setIsAllSelected] = useState(true);
  const [nationDropdownVisibility, setNationDropdownVisibility] =
    useState(false);
  const [cityDropdownVisibility, setCityDropdownVisibility] = useState(false);
  const [districtDropdownVisibility, setDistrictDropdownVisibility] =
    useState(false);
  const [genderDropdownVisibility, setGenderDropdownVisibility] =
    useState(false);
  const [birthYearDropdownVisibility, setBirthYearDropdownVisibility] =
    useState(false);
  const [birthMonthDropdownVisibility, setBirthMonthDropdownVisibility] =
    useState(false);
  const [birthDayDropdownVisibility, setBirthDayDropdownVisibility] =
    useState(false);

  const [selectedNation, setSelectedNation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedBirthYear, setSelectedBirthYear] = useState("");
  const [selectedBirthMonth, setSelectedBirthMonth] = useState("");
  const [selectedBirthDay, setSelectedBirthDay] = useState("");

  const selectedValues = [
    selectedNation,
    selectedCity,
    selectedDistrict,
    selectedGender,
    selectedBirthYear,
    selectedBirthMonth,
    selectedBirthDay,
  ];

  const checkIfAllSelected = () => {
    if (
      selectedNation !== "" &&
      selectedCity !== "" &&
      selectedDistrict !== "" &&
      selectedGender !== "" &&
      selectedBirthYear !== "" &&
      selectedBirthMonth !== "" &&
      selectedBirthDay !== ""
    )
      setIsAllSelected(true);
    else setIsAllSelected(false);
  };

  // check for all value is updated
  useEffect(() => {
    checkIfAllSelected();
  }, selectedValues);

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
  const gotoNextStep = () => {
    // console.log(userData);
    shepherd.whip("test", "TermsInUsePage");
  };
  const handleBackButton = () => {
    shepherd.whip("test", "RegisterPage1");
  };
  return (
    <div id={id} className={cl}>
      {/* <div className="username">{`@${dummyUserName}`}</div> */}
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />

      <div className="large-title">{`회원가입`}</div>
      <div className="medium-title-box">
        <div className="medium-title">{`거의 다 됐어요!`}</div>
        <div className="medium-title">{`조금만 더 힘내세요!`}</div>
      </div>
      <div className="small-title">{`프로필의 내용은 바로 공개되지 않아요!\n`}</div>

      <div className="choiceText">{`태어난 나라를 골라주세요\n`}</div>
      <div className="row">
        <div className={"selectBox dropdownButton fullBox"}>
          <span className="icon">
            <img src={selectNation} alt="" />
          </span>
          <select className="select" onChange={handleChangeNation}>
            <option disabled selected>
              국가
            </option>
            {nationOptionData.map((nation) => {
              return <option>{nation.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="choiceText">{`거주하는 시, 구를 선택해주세요\n`}</div>
      <div className="row">
        <div className="selectBox dropdownButton halfBox">
          <span className="icon">
            <img src={selectCity} alt="" />
          </span>
          <select className="select" onChange={handleChangeCity}>
            <option disabled selected>
              시
            </option>
            {cityOptionData.map((city) => {
              return <option value={city.value}>{city.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>
        <div className="selectBox dropdownButton halfBox">
          <span className="icon">
            <img src={selectDistrict} alt="" />
          </span>
          <select className="select" onChange={handleChangeDistrict}>
            <option disabled selected>
              구
            </option>
            {districtOptionData.map((district) => {
              return <option value={district.value}>{district.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="choiceText">{`성별을 선택해주세요\n`}</div>
      <div className="row">
        <div className={"selectBox dropdownButton fullBox"}>
          <span className="icon">
            <img src={selectGender} alt="" />
          </span>
          <select className="select" onChange={handleChangeGender}>
            <option disabled selected>
              성별
            </option>
            {genderOptionData.map((gender) => {
              return <option value={gender.value}>{gender.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="choiceText">{`생년월일을 선택해주세요\n`}</div>
      <div className="row">
        <div className="selectBox dropdownButton yearBox">
          <select className="select" onChange={handleChangeBirthYear}>
            <option disabled selected>
              년
            </option>
            {birthYearOptionData.map((year) => {
              return <option value={year.value}>{year.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>
        <div className="selectBox dropdownButton monthBox">
          <select className="select" onChange={handleChangeBirthMonth}>
            <option disabled selected>
              월
            </option>
            {birthMonthOptionData.map((month) => {
              return <option value={month.value}>{month.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>

        <div className={"selectBox dropdownButton dayBox"}>
          <select className="select" onChange={handleChangeBirthDay}>
            <option disabled selected>
              일
            </option>
            {birthDayOptionData.map((day) => {
              return <option value={day.value}>{day.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>
      </div>
      <button
        className={`next-step-button${isAllSelected ? "-on" : "-off"}`}
        onClick={isAllSelected ? gotoNextStep : () => {}}
      >
        계속
      </button>
    </div>
  );
};

export default RegisterPage2;
