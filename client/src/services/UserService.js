import axios from "axios";
import { useHttp } from "../hooks/http.hook";
import authHeader from "./AuthHeader";


const useUserService = () => {


const API_URL = "http://localhost:8083/api/";

const {loading, request, error, clearError} = useHttp();

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = async () => {
  const res = await request(`${API_URL}user`, authHeader());
  return res;
}  

const getAdminBoard = async () => {
  const res = await request(`${API_URL}admin`, authHeader());
  return res;
}  

const getAdresses = async () => {
  const res = await request(`${API_URL}user/adresses`, authHeader());
  console.log(res.adresses)
  return res.adresses;
}

const addAdress = (adress) => {
  return axios
    .post(API_URL + "user/adress/submit", {
      adress: adress.adress
    }, {headers: authHeader()})
    .then((response) => {
      return response.data;
    });
};

const deleteAdress = (adress) => {
  return axios
    .post(API_URL + "user/adress/delete", {
      adress: adress
    }, {headers: authHeader()})
    .then((response) => {
      return response.data;
    });
};

const getUsers = async () => {
  const res = await request(`${API_URL}admin/users`, authHeader());
  return res.users;
}

const addUser = (user) => {
  return axios
    .post(API_URL + "admin/users/submit", {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password: user.password,
      roles: user.roles ? user.roles : null
    }, {headers: authHeader()})
    .then((response) => {
      return response.data;
    });
};

const deleteUser = (id) => {
  return axios
    .post(API_URL + "admin/users/delete", {
      userId: id
    }, {headers: authHeader()})
    .then((response) => {
      return response.data;
    });
};

const refreshToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios
    .post(API_URL + "auth/refreshtoken", {
      refreshToken: user.refreshToken
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};


return {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  loading, request, error,
  clearError, refreshToken,
  getAdresses, addAdress, deleteAdress,
  getUsers, addUser, deleteUser
};
}
export default useUserService;