import * as React from "react";
import "./AttendanceCheck.css";

export const connHist: number[] = [0, 1, 0, 1, 0, 1, 0];

const AttendanceCheck = () => {
  return (
    <div>
      <div className="card_attchk">
        <div className="card_attchk_header">출석체크!</div>
        <div className="card_attendance">
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
          <span>일</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCheck;

<style scoped></style>;
