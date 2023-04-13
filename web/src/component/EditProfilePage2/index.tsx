import React, { useState, useEffect } from "react";
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
import { districtList } from "../../resource/districtList";
import { nationList } from "../../resource/nationList";

interface Props extends Properties {
  setNavVisible: Function;
}

const EditProfilePage2 = (properties: Props) => {
  const id = [`_${idiotproof.trace(EditProfilePage2)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  const dummyUserName = "아크릴오므라이스";
  properties.setNavVisible(true);
  const cityOptionData = [
    { key: 1, value: "서울" },
    // { key: 2, value: "부산" },
    // { key: 3, value: "대구" },
    // { key: 3, value: "대전" },
  ];

  const districtOptionData = districtList.map((district, index) => {
    return { key: index + 1, value: district };
  });

  const genderOptionData = [
    { key: 1, value: "남자" },
    { key: 2, value: "여자" },
    { key: 3, value: "레즈비언" },
    { key: 4, value: "게이" },
    { key: 5, value: "양성애자" },
    { key: 6, value: "트렌스젠더" },
  ];

  const now = new Date();
  const birthYearOptionData = [];
  const birthMonthOptionData = [];
  const birthDayOptionData = [];

  for (let year = now.getFullYear(); year >= 1950; year--) {
    birthYearOptionData.push({
      key: now.getFullYear() + 1 - year,
      value: year.toString(),
    });
  }

  for (let month = 1; month <= 12; month++) {
    birthMonthOptionData.push({
      key: month,
      value: month.toString().padStart(2, "0"),
    });
  }

  for (let day = 1; day <= 31; day++) {
    birthDayOptionData.push({
      key: day,
      value: day.toString().padStart(2, "0"),
    });
  }
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
  const [userData, setUserData] = useState<any>("");
  const selectedValues = [
    selectedNation,
    selectedCity,
    selectedDistrict,
    selectedGender,
    selectedBirthYear,
    selectedBirthMonth,
    selectedBirthDay,
  ];

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
  const nationOptionData = nationList.map((nation, index) => {
    return { key: index + 1, value: nation };
  });
  const [isAllSelected, setIsAllSelected] = useState(true);
  const checkIfAllSelected = () => {
    console.log(selectedNation);
    console.log(selectedCity, selectedDistrict, selectedGender);
    console.log(selectedBirthYear, selectedBirthMonth, selectedBirthDay);
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
  const handleBackButton = () => {
    shepherd.whip("test", "EditProfilePage1");
  };
  const saveUserData = async (userData: any) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const gotoNextStep = async () => {
    userData.country = selectedNation;
    userData.district = selectedDistrict;
    userData.city = selectedCity;
    userData.gender = selectedGender;
    userData.birth = selectedBirthYear + selectedBirthMonth + selectedBirthDay;
    await saveUserData(userData);
    shepherd.whip("test", "NewsletterPage");
  };
  useEffect(() => {
    let tmp: any = localStorage.getItem("userData");
    if (tmp != null) tmp = JSON.parse(tmp);

    setUserData(tmp);
    if (tmp.country != "") setSelectedNation(tmp.country);
    if (tmp.district != "") setSelectedDistrict(tmp.district);
    if (tmp.city != "") setSelectedCity(tmp.city);
    if (tmp.gender != "") setSelectedGender(tmp.gender);
    if (tmp.birth != "") {
      let str = tmp.birth.toString();
      setSelectedBirthYear(str.slice(0, 4));
      setSelectedBirthMonth(str.slice(4, 6));
      setSelectedBirthDay(str.slice(6, 8));
    }
    console.log(tmp);
    checkIfAllSelected();
  }, []);
  useEffect(() => {
    checkIfAllSelected();
  }, selectedValues);

  return (
    <div id={id} className={cl}>
      {/* <div className="username">{`@${dummyUserName}`}</div> */}
      <img className="back-button" src={ArrowLeft} onClick={handleBackButton} />

      <div className="large-title">{userData.nickname}</div>
      <div className="choiceText">{`태어난 나라를 골라주세요\n`}</div>
      <div className="row">
        <div className={"selectBox dropdownButton fullBox"}>
          <span className="icon">
            <img src={selectNation} alt="" />
          </span>
          <select
            id="countrySelect"
            className="select"
            onChange={handleChangeNation}
            value={selectedNation}
          >
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
          <select
            id="citySelect"
            className="select"
            onChange={handleChangeCity}
            value={selectedCity}
          >
            <option disabled selected>
              시
            </option>
            {cityOptionData.map((city) => {
              return <option>{city.value}</option>;
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
          <select
            id="districtSelect"
            className="select"
            onChange={handleChangeDistrict}
            value={selectedDistrict}
          >
            <option disabled selected>
              구
            </option>
            {districtOptionData.map((district) => {
              return <option>{district.value}</option>;
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
          <select
            id="genderSelect"
            className="select"
            onChange={handleChangeGender}
            value={selectedGender}
          >
            <option disabled selected>
              성별
            </option>
            {genderOptionData.map((gender) => {
              return <option>{gender.value}</option>;
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
          <select
            id="yearSelect"
            className="select"
            onChange={handleChangeBirthYear}
            value={selectedBirthYear}
          >
            <option disabled selected>
              년
            </option>
            {birthYearOptionData.map((year) => {
              return <option>{year.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>
        <div className="selectBox dropdownButton monthBox">
          <select
            id="monthSelect"
            className="select"
            onChange={handleChangeBirthMonth}
            value={selectedBirthMonth}
          >
            <option disabled selected>
              월
            </option>
            {birthMonthOptionData.map((month) => {
              return <option>{month.value}</option>;
            })}
          </select>
          <span className="iconArrow">
            <img src={downwardArrow} alt="" />
          </span>
        </div>

        <div className={"selectBox dropdownButton dayBox"}>
          <select
            id="daySelect"
            className="select"
            onChange={handleChangeBirthDay}
            value={selectedBirthDay}
          >
            <option disabled selected>
              일
            </option>
            {birthDayOptionData.map((day) => {
              return <option>{day.value}</option>;
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

export default EditProfilePage2;
