const SERVER_URL = "http://localhost:8080/";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const testAPI = {
  connTest: async () => {
    const res = await fetch(SERVER_URL + "connTest", {
      method: "GET",
      headers: HEADERS,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  },
};
