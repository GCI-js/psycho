import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import downwardArrow from "../../img/downwardArrow.png";
import selectNation from "../../img/selectNation.png";
import selectCity from "../../img/selectCity.png";
import selectDistrict from "../../img/selectDistrict.png";
import selectGender from "../../img/selectGender.png";
import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";
import ArrowLeft from "../../img/Arrow_left.png";
import { district } from "../../resource/district";
import { nationList } from "../../resource/nationList";

interface Props extends Properties {
  setNavVisible: Function;
}

const RegisterPage2 = (properties: Props) => {
  /*
[2022.01.12 jongseok lee] 
username 백엔드 로직 쓰면되고 OptionData는 어떤 옵션 들어가야하는지 정확히 정해지면 따로 다른 파일로 빼는게 더 나을거 같습니다. 
포맷 참고를 위해 코드는 남겨둡니다.
*/
  const id = [`_${idiotproof.trace(RegisterPage2)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  const handleBackButton = () => {
    shepherd.whip("test", "RegisterPage1");
  };

  const nationOptionData = nationList.map((nation, index) => {
    return { key: index + 1, value: nation };
  });

  const cityOptionData = Object.keys(district).map((key, index) => ({
    key: index + 1,
    value: key,
  }));

  const genderOptionData = [
    { key: 1, value: "남자" },
    { key: 2, value: "여자" },
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

  const [isAllSelected, setIsAllSelected] = useState(true);

  const [selectedNation, setSelectedNation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedBirthYear, setSelectedBirthYear] = useState("");
  const [selectedBirthMonth, setSelectedBirthMonth] = useState("");
  const [selectedBirthDay, setSelectedBirthDay] = useState("");
  const [userData, setUserData] = useState<any>("");
  const [districtOptions, setDistrictOptions] = useState([]);
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

  useEffect(() => {
    let isOldUser = localStorage.getItem("isOldUser");
    if (isOldUser == "true") {
      properties.setNavVisible(true);
      shepherd.whip("test", "NewsletterPage");
    }
  }, []);

  // check for all value is updated
  useEffect(() => {
    checkIfAllSelected();
    if (selectedBirthYear !== "" && selectedBirthMonth !== "") {
      if (selectedBirthMonth === "02") {
        if (Number(selectedBirthYear) % 4 === 0) setDateOption(29);
        else setDateOption(28);
      } else {
        if (selectedBirthMonth in ["01", "03", "05", "07", "08", "10", "12"])
          setDateOption(31);
        else setDateOption(30);
      }
    }
  }, selectedValues);

  function setDateOption(date: number) {
    for (let day = 1; day <= date; day++) {
      birthDayOptionData.push({
        key: day,
        value: day.toString().padStart(2, "0"),
      });
    }
  }

  useEffect(() => {
    let userData: any = JSON.parse(localStorage.getItem("userData"));
    setUserData(userData);
    if (userData == null) handleBackButton();
    if (userData.country != "") setSelectedNation(userData.country);
    if (userData.district != "") setSelectedDistrict(userData.district);
    if (userData.city != "") setSelectedCity(userData.city);
    if (userData.gender != "") setSelectedGender(userData.gender);
    if (userData.birth != "") {
      let str = userData.birth.toString();
      setSelectedBirthYear(str.slice(0, 4));
      setSelectedBirthMonth(str.slice(4, 6));
      setSelectedBirthDay(str.slice(6, 8));
    }
    checkIfAllSelected();
  }, []);

  const handleChangeNation = (event: any) => {
    setSelectedNation(event.target.value);
    setSelectedCity("서울특별시");
    setDistrictOptions(district["서울특별시"]);
  };

  const handleChangeCity = (event: any) => {
    setSelectedCity(event.target.value);
    setDistrictOptions(district[event.target.value]);
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
    console.log(JSON.stringify(userData));
    console.log(selectedValues);
    userData.country = selectedNation;
    userData.city = selectedCity;
    userData.district = selectedDistrict;
    userData.gender = selectedGender;
    userData.birth = `${selectedBirthYear}${selectedBirthMonth}${selectedBirthDay}`;
    console.log(userData);

    localStorage.setItem("userData", JSON.stringify(userData));

    shepherd.whip("test", "RegisterPage3");
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
          <select
            id="countrySelect"
            className="select"
            onChange={handleChangeNation}
            value={selectedNation}
          >
            <option disabled selected value="">
              국가
            </option>
            {nationOptionData.map((nation) => {
              return <option value={nation.value}>{nation.value}</option>;
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
          {selectedNation === "한국" ? (
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
          ) : (
            <input
              id="cityInput"
              className="select"
              onChange={handleChangeCity}
              value={selectedCity}
              placeholder="시"
            />
          )}
          {selectedNation == "한국" && (
            <span className="iconArrow">
              <img src={downwardArrow} alt="" />
            </span>
          )}
        </div>
        <div className="selectBox dropdownButton halfBox">
          <span className="icon">
            <img src={selectDistrict} alt="" />
          </span>
          {selectedNation === "한국" ? (
            <select
              id="districtSelect"
              className="select"
              onChange={handleChangeDistrict}
              value={selectedDistrict}
            >
              <option disabled selected>
                구
              </option>
              {districtOptions.map((district) => {
                return <option>{district}</option>;
              })}
            </select>
          ) : (
            <input
              id="districtInput"
              className="select"
              onChange={handleChangeDistrict}
              value={selectedDistrict}
              placeholder="구"
            />
          )}
          {selectedNation == "한국" && (
            <span className="iconArrow">
              <img src={downwardArrow} alt="" />
            </span>
          )}
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
            <option disabled selected value="">
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
          <select
            id="yearSelect"
            className="select"
            onChange={handleChangeBirthYear}
            value={selectedBirthYear}
          >
            <option disabled selected value="">
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
          <select
            id="monthSelect"
            className="select"
            onChange={handleChangeBirthMonth}
            value={selectedBirthMonth}
          >
            <option disabled selected value="">
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
          <select
            id="daySelect"
            className="select"
            onChange={handleChangeBirthDay}
            value={selectedBirthDay}
          >
            <option disabled selected value="">
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
