import { getNewsletterList } from "./NewsletterList";

export type RandomType = {
	type: string;
	data: [];
};

export const RandomList: RandomType[] = [];

export const RandomListInit = (): RandomType[] => {
	//RandomList에 컴포넌트 type과 필요한 data 삽입
	let NewsletterList: any[] = [];
	NewsletterList = getNewsletterList();
	RandomList.push({ type: "changembti", data: [] });
	RandomList.push({ type: "hashtagsearchresult", data: [] });
	for (let i = 0; i < NewsletterList.length; i++) {
		RandomList.push({ type: "newsletter", data: NewsletterList[i] });
	}
	return RandomList;
};
