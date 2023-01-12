export type NewsletterType = {
	newsletterId: string;
	thumbnail: string;
	title: string;
	hashtag: { hashtag_id: string; name: string }[];
	url: string;
	writer: string;
};
