import { adjective } from "../resource/nicknameAdj";
import { noun } from "../resource/nicknameNoun";

console.log(adjective);

console.log(noun);
export const getRandNickname = () => {
  let adjectiveIndex: number = Math.floor(Math.random() * 1000) % 5;
  let nounIndex: number = Math.floor(Math.random() * 100) % 5;  
  let nickname: string = adjective[adjectiveIndex] + noun[nounIndex];
  console.log(nickname);
  return nickname;
}