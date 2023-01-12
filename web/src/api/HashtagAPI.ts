const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const HashtagAPI = {
  createHashtag: async (name: string) => {
    let body = new FormData();
    body.append("name", name);
    let res = await fetch(process.env.HTTP_SERVER_URL + "/hashtag/", {
      method: "POST",
      headers: HEADERS,
      body: body,
    }).then((res) => {
      return res.json();
    });
    return res;
  },
};
