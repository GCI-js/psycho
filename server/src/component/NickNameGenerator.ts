import { Request, Response } from "express";

let adjective: string[] = [
  "무기력한 ",
  "모범적인 ",
  "슬기로운 ",
  "만족하는 ",
  "전설의 ",
];
let noun: string[] = ["김치", "페이지", "만두", "대게", "물"];

let nicknameCheck: boolean[][] = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
]; //DB에 접근해서 받아오기

let adjectiveIndex: number = Math.floor(Math.random() * 1000) % 5;
let nounIndex: number = Math.floor(Math.random() * 100) % 5;

let nickname: string = adjective[adjectiveIndex] + noun[nounIndex];

//배열 인덱스 새로고침
function refreshIndex() {
  while (nicknameCheck[adjectiveIndex][nounIndex] === true) {
    adjectiveIndex = Math.floor(Math.random() * 1000) % 5;
    nounIndex = Math.floor(Math.random() * 100) % 5;
  }

  nickname = adjective[adjectiveIndex] + noun[nounIndex];
  nicknameCheck[adjectiveIndex][nounIndex] = true;
  //이름 고르기 완료 시 nicknameCheck true
}

const NickNameGenerator = {
  nicnknameTest: (req: Request, res: Response) => {
    refreshIndex();
    console.log("/nicknameTest called");
    console.log(nickname);
    console.log(nicknameCheck);
    console.log("Method: " + req.method.toString());
    console.log(req.body);
    console.log(req.cookies);
    // res.cookie("test_cookie", "666666666");
    res.status(200).json({ "req.body: ": req.body, msg: nickname });
  },
};

export default NickNameGenerator;
