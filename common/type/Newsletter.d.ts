export interface Newsletter {
  _id?: string;
  newsletterId: string;
  thumbnail: string; // image url
  title: string;
  hashtags: Hashtag[];
  url: string; // original post url
  writer: string;
}
