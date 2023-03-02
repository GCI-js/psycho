export const getInitUserData = () => {
  let user = {
    nickname: "애미야 물좀다오",
    mbtis: [
      {
        date: new Date().getTime(),
        EI: 50,
        NS: 50,
        FT: 50,
        JP: 50,
      },
    ],
    bloodType: "",
    country: "",
    city: "",
    district: "",
    gender: "",
    birth: 0,
  };
  return user;
};
