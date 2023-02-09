import React, { useState } from "react";
import MainButton from "../MainButton/MainButton";
import styles from "./index.module.scss";
import Dropdown from "../DropDown/Dropdown";
import downwardArrow from "../../img/downwardArrow.png";
import selectNation from "../../img/selectNation.png";
import selectCity from "../../img/selectCity.png";
import selectDistrict from "../../img/selectDistrict.png";
import selectGender from "../../img/selectGender.png";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
const RegisterPage2 = (properties: Properties) => {
  /*
[2022.01.12 jongseok lee] 
username 백엔드 로직 쓰면되고 OptionData는 어떤 옵션 들어가야하는지 정확히 정해지면 따로 다른 파일로 빼는게 더 나을거 같습니다. 
포맷 참고를 위해 코드는 남겨둡니다.
*/
  const id = [`_${idiotproof.trace(RegisterPage2)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

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
    { key: 1, value: "1" },
    { key: 2, value: "2" },
    { key: 3, value: "3" },
    { key: 4, value: "4" },
    { key: 5, value: "5" },
    { key: 6, value: "6" },
    { key: 7, value: "7" },
    { key: 8, value: "8" },
    { key: 9, value: "9" },
    { key: 10, value: "10" },
    { key: 11, value: "11" },
    { key: 12, value: "12" },
  ];
  const birthDayOptionData = [
    { key: 1, value: "1" },
    { key: 2, value: "2" },
    { key: 3, value: "3" },
    { key: 4, value: "4" },
    { key: 5, value: "5" },
    { key: 6, value: "6" },
    { key: 7, value: "7" },
    { key: 8, value: "8" },
    { key: 9, value: "9" },
    { key: 10, value: "10" },
    { key: 11, value: "11" },
    { key: 12, value: "12" },
    { key: 31, value: "31" },
  ];

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
  return (
    <div id={id} className={cl}>
      {/* <div className="username">{`@${dummyUserName}`}</div> */}
      <div className="large-title">{`회원가입\n`}</div>
      <div className="medium-title-box">
        <div className="medium-title">{`거의 다 됐어요! \n `}</div>
        <div className="medium-title">{`조금만 더 힘내세요!\n`}</div>
      </div>
      <div className="small-title">{`프로필의 내용은 바로 공개되지 않아요!\n`}</div>

      <div className="choiceText">{`태어난 나라를 골라주세요\n`}</div>
      <div className="selectBox">
        <button
          className="nation dropdownButton"
          onClick={(e) =>
            setNationDropdownVisibility(!nationDropdownVisibility)
          }
        >
          <img className="dropdownIcon" src={selectNation} />
          {nationDropdownVisibility ? "국가" : "국가"}
          <img className="dropdownDownwardIcon" src={downwardArrow} />
        </button>
        <Dropdown visibility={nationDropdownVisibility}>
          <ul>
            {nationOptionData.map((nation) => {
              return <li>{nation.value}</li>;
            })}
          </ul>
        </Dropdown>
      </div>
      <div className="choiceText">{`거주하는 시, 구를 선택해주세요\n`}</div>
      <div className="row">
        <div className="selectBox">
          <button
            className="city dropdownButton"
            onClick={(e) => setCityDropdownVisibility(!cityDropdownVisibility)}
          >
            <img className="dropdownIcon" src={selectCity} />
            {/* This line must be fixed */}
            {cityDropdownVisibility ? "시" : "시"}
            <img className="dropdownDownwardIcon" src={downwardArrow} />
          </button>
          <Dropdown visibility={cityDropdownVisibility}>
            <ul>
              {cityOptionData.map((city) => {
                return <li>{city.value}</li>;
              })}
            </ul>
          </Dropdown>
        </div>
        <div className="selectBox">
          <button
            className="district dropdownButton"
            onClick={(e) =>
              setDistrictDropdownVisibility(!districtDropdownVisibility)
            }
          >
            <img className="dropdownIcon" src={selectDistrict} />
            {/* This line must be fixed */}
            {districtDropdownVisibility ? "구" : "구"}
            <img className="dropdownDownwardIcon" src={downwardArrow} />
          </button>
          <Dropdown visibility={districtDropdownVisibility}>
            <ul>
              {districtOptionData.map((district) => {
                return <li>{district.value}</li>;
              })}
            </ul>
          </Dropdown>
        </div>
      </div>
      <div className="choiceText">{`성별을 선택해주세요\n`}</div>
      <div className="selectBox">
        <button
          className="gender dropdownButton"
          onClick={(e) =>
            setGenderDropdownVisibility(!genderDropdownVisibility)
          }
        >
          <img className="dropdownIcon" src={selectGender} />
          {/* This line must be fixed */}
          {genderDropdownVisibility ? "성별" : "성별"}
          <img className="dropdownDownwardIcon" src={downwardArrow} />
        </button>
        <Dropdown visibility={genderDropdownVisibility}>
          <ul>
            {genderOptionData.map((gender) => {
              return <li>{gender.value}</li>;
            })}
          </ul>
        </Dropdown>
      </div>
      <div className="choiceText">{`생년월일을 선택해주세요\n`}</div>
      <div className="row">
        <div className="selectBox">
          <button
            className="year dropdownButton"
            onClick={(e) =>
              setBirthYearDropdownVisibility(!birthYearDropdownVisibility)
            }
          >
            {/* This line must be fixed */}
            {birthYearDropdownVisibility ? "년" : "년"}
            <img className="dropdownDownwardIcon" src={downwardArrow} />
          </button>
          <Dropdown visibility={birthYearDropdownVisibility}>
            <ul>
              {birthYearOptionData.map((birthYear) => {
                return <li>{birthYear.value}</li>;
              })}
            </ul>
          </Dropdown>
        </div>
        <div className="selectBox">
          <button
            className="month dropdownButton"
            onClick={(e) =>
              setBirthMonthDropdownVisibility(!birthMonthDropdownVisibility)
            }
          >
            {/* This line must be fixed */}
            {birthMonthDropdownVisibility ? "월" : "월"}
            <img className="dropdownDownwardIcon" src={downwardArrow} />
          </button>
          <Dropdown visibility={birthMonthDropdownVisibility}>
            <ul>
              {birthMonthOptionData.map((birthMonth) => {
                return <li>{birthMonth.value}</li>;
              })}
            </ul>
          </Dropdown>
        </div>
        <div className="selectBox">
          <button
            className="day dropdownButton"
            onClick={(e) =>
              setBirthDayDropdownVisibility(!birthDayDropdownVisibility)
            }
          >
            {/* This line must be fixed */}
            {birthDayDropdownVisibility ? "일" : "일"}
            <img className="dropdownDownwardIcon" src={downwardArrow} />
          </button>
          <Dropdown visibility={birthDayDropdownVisibility}>
            <ul>
              {birthDayOptionData.map((birthDay) => {
                return <li>{birthDay.value}</li>;
              })}
            </ul>
          </Dropdown>
        </div>
      </div>
      <button
        className="BasicButton"
        onClick={() => shepherd.whip("test", "TermsInUsePage")}
      >
        계속
      </button>
      {/* <BasicButton
        content="계속"
        pFunction={shepherd.whip("test", "TermsInUsePage")}
      /> */}
    </div>
  );
};

export default RegisterPage2;
