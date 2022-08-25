import { Request, Response } from 'express';
import { IntegerType } from 'mongodb';

let adjective: string[] = ['무기력한 ','모범적인 '];
let noun: string[]=['김치','페이지'];

let nicknameCheck: boolean[][]=[[false,false],[false,false]];//DB에 접근해서 받아오기

const adjectiveIndex:number =Math.floor(Math.random()*1000)%2;
const nounIndex:number =Math.floor(Math.random()*1000)%2;

//index 받아서 확인 하는 로직 필요

let nickname: string = adjective[adjectiveIndex]+ noun[nounIndex];

//nicknameCheck 인덱스 업데이트 필요

const NickNameGenerator = {
  nicnkname_test: (req: Request, res: Response, ) => {
    console.log("/nickname_test called");
    console.log(nickname);
    console.log("Method: " + req.method.toString());
    console.log(req.body);
    console.log(req.cookies);
    res.cookie("test_cookie", "666666666");
    res.status(200).json({"req.body: ": req.body, "msg": "Hello, world!"});
  }
}

export default NickNameGenerator;
