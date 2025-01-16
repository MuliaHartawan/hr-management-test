import { getToken, getUser } from "../api/auth/index";

export const login = async (data) => {
  try {
    const respon = await getToken(data);
    localStorage.setItem("token", respon.token);

    const user = await getUser(respon.token);

    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
