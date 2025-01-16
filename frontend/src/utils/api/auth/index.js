import axios from "axios";

export const getToken = (args) => {
  return new Promise((resolve) => {
    axios
      .post(import.meta.env.VITE_BASE_URL + `/api/v1/auth/login`, args, {
        headers: {
          "Content-Type": "application/json",
        },
        // skipAuthRefresh: true,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        return error;
      });
  });
};

export const getUser = (token) => {
  return new Promise((resolve) => {
    axios
      .get(import.meta.env.VITE_BASE_URL + `/users/:id`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Token autentikasi Bearer
        },
        skipAuthRefresh: true,
      })
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        return error;
      });
  });
};
