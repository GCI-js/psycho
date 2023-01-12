import { NewsletterType } from "./Newsletter";
import { useEffect, useState } from "react";
export const getNewsletterList = (): NewsletterType[] => {
	return NewsletterList;
};

export const getNewsletterListAPI = () => {
	const [newsletters, setewsletters] = useState<NewsletterType[]>([]);

	const apiGet = async () => {
		// const response = await fetch("http://,,,,," + "/items");
		// const data = await response.json();
		// setewsletters(data);
		// if(response){

		// }
		var tmpurl = "http://43.201.148.199:8080/newsletter";
		const apiUrl: string = tmpurl + "/items";
		await fetch(apiUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
				} else {
					throw new Error("error");
				}
				res.json();
			})
			.then((data) => {
				// setewsletters(<NewsletterType[]>);
				console.log("data...", data);
			});
	};

	useEffect(() => {
		apiGet();
	}, []);

	return newsletters;
};

export const NewsletterList: NewsletterType[] = [
	{
		newsletterId: "0",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?1",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},

	{
		newsletterId: "1",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?2",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},

	{
		newsletterId: "2",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?3",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},

	{
		newsletterId: "3",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?4",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},

	{
		newsletterId: "4",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?5",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
	{
		newsletterId: "5",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?6",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
	{
		newsletterId: "6",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?7",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
	{
		newsletterId: "7",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?8",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
	{
		newsletterId: "8",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?9",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
	{
		newsletterId: "9",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?10",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
	{
		newsletterId: "10",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?11",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
	{
		newsletterId: "11",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?12",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
	{
		newsletterId: "12",
		title: "아마존 디자이너는 어떻게 포트폴리오를 만들까?13",
		thumbnail:
			"https://content.surfit.io/thumbs/image/wkRX5/yRXDa/924179560630625122811b/cover-center-2x.webp",
		url: "https://surfit.io/link/yRXDa",
		hashtag: [
			{
				hashtag_id: "0",
				name: "GCI",
			},
			{
				hashtag_id: "1",
				name: "MBTI",
			},
			{
				hashtag_id: "2",
				name: "1030",
			},
			{
				hashtag_id: "3",
				name: "성격테스트",
			},
			{
				hashtag_id: "4",
				name: "오해와진실",
			},
		],
		writer: "",
	},
];
