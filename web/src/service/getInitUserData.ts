export const getInitUserData = () => {
  let user = {
    nickname: "",
    mbtis: [
      {
        date: new Date().toLocaleDateString(),
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
    birth: "",
  };
  return user;
};
