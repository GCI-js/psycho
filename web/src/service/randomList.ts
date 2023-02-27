import { getNewsletterList } from "./newsletterList";
import { Newsletter } from "../@types/Newsletter";
export type RandomType = {
	type: string;
	data: any;
};

export const RandomList: RandomType[] = [];

export const RandomListInit = (): RandomType[] => {
	//RandomList에 컴포넌트 type과 필요한 data 삽입
	let NewsletterList: Newsletter[] = [];
	NewsletterList = getNewsletterList();
	RandomList.push({ type: "MbtiHistogram", data: [] });
	RandomList.push({ type: "hashtagsearchresult", data: [] });
	for (let i = 0; i < NewsletterList.length; i++) {
		RandomList.push({ type: "newsletter", data: NewsletterList[i] });
	}
	return shuffle(RandomList);
};

export function shuffle<RandomType>(array: RandomType[]): RandomType[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};