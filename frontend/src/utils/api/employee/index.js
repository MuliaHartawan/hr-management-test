import axios from "axios";

export const getEmployee = (token) => {
  return new Promise((resolve) => {
    axios
      .get(import.meta.env.VITE_BASE_URL + `/api/v1/employee`, {
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
