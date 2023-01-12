import * as React from "react";
import "./AttendanceCheck.css";

export const connHist: number[] = [1, 0, 1, 1, 0, 1, 0];
var styleList: string[] = ["", "", "", "", "", "", ""];
for (var i = 0; i < connHist.length; i++) {
	if (connHist[i] == 0) {
		styleList[i] = "";
	} else {
		if (i == 0 && connHist[1] == 0) {
			styleList[i] = "attchek_yes";
		} else if (i == 0 && connHist[1] == 1) {
			styleList[i] = "attchek_first";
		} else if (i == 6 && connHist[5] == 0) {
			styleList[i] = "attchek_yes";
		} else if (i == 6 && connHist[5] == 1) {
			styleList[i] = "attchek_last";
		} else if (connHist[i - 1] == 1 && connHist[i + 1] == 1) {
			styleList[i] = "attchek_middle";
		} else if (connHist[i - 1] == 0 && connHist[i + 1] == 1) {
			styleList[i] = "attchek_first";
		} else if (connHist[i - 1] == 1 && connHist[i + 1] == 0) {
			styleList[i] = "attchek_last";
		} else if (connHist[i - 1] == 0 && connHist[i + 1] == 0) {
			styleList[i] = "attchek_yes";
		}
	}
	//0 : no
	//1 : first
	//2 : middle
	//3 : last
	//4 : yes
}
const AttendanceCheck = () => {
	return (
		<div>
			<div className="card_attchk">
				<div className="card_attchk_header">출석체크!</div>
				<div className="tablediv">
					<table className="card_attchk_table">
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</table>
					<table className="card_attchk_tablein">
						<td className={styleList[0]}>월</td>
						<td className={styleList[1]}>화 </td>
						<td className={styleList[2]}>수</td>
						<td className={styleList[3]}>목</td>
						<td className={styleList[4]}>금</td>
						<td className={styleList[5]}>토</td>
						<td className={styleList[6]}>일</td>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AttendanceCheck;

<style scoped></style>;
