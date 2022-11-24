import * as React from "react";
import "./AttendanceCheck.css";

export const connHist: number[] = [0, 1, 0, 0, 0, 1, 0];

const AttendanceCheck = () => {
  return (
    <div>
      <div className="card_attchk">
        <div className="card_attchk_header">출석체크!</div>

        <table className="card_attchk_table">
          <td className={connHist[0] === 1 ? "attchek_yes" : ""}>월</td>
          <td className={connHist[1] === 1 ? "attchek_yes" : ""}>화</td>
          <td className={connHist[2] === 1 ? "attchek_yes" : ""}>수</td>
          <td className={connHist[3] === 1 ? "attchek_yes" : ""}>목</td>
          <td className={connHist[4] === 1 ? "attchek_yes" : ""}>금</td>
          <td className={connHist[5] === 1 ? "attchek_yes" : ""}>토</td>
          <td className={connHist[6] === 1 ? "attchek_yes" : ""}>일</td>
        </table>
        {/* <div>월</div>
          <div>화</div>
          <div>수</div>
          <span>목</span>
          <span>금</span>
          <span>토</span>
          <span>일</span> */}
      </div>
    </div>
  );
};

export default AttendanceCheck;

<style scoped></style>;
