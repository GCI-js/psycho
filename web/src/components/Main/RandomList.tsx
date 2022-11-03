import { getNewsletterList } from "./NewsletterList";

export type RandomType = {
  type: string;
  data: [];
};

export const getRandomList = (): RandomType[] => {
  return RandomList;
};

export const RandomList: RandomType[] = [];

export function RandomListInit() {
  let NewsletterList: any[] = [];
  NewsletterList = getNewsletterList();
  for (let i = 0; i < NewsletterList.length; i++) {
    RandomList.push({ type: "newsletter", data: NewsletterList[i] });
  }
}
