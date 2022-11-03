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
        </div>
      </div>
    </div>
  );
};

export default AttendanceCheck;

<style scoped></style>;
