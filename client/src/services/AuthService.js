import axios from "axios";

const API_URL = "http://localhost:8083/api/auth/";

const register = (username, email, password, firstName, lastName) => {
  return axios.post(API_URL + "signup", {
    firstName,
    lastName,
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("roles", JSON.stringify(response.data.roles));
        localStorage.setItem("username", JSON.stringify(response.data.username));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("roles");
  localStorage.removeItem("username");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("username"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;