import axios from "./axios";

export const loginAPI = async (data) => {
  try {
    const response = await axios.post("/login", data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProfile = async () => {
  try {
    const response = await axios.get("/profile");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
