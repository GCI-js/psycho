export interface Newsletter {
  _id?: string;
  newsletterId: string;
  thumbnail: string; // image url
  title: string;
  hashtag: string; // hashtag names
  link: string; // original post url
  writer: string;
}
