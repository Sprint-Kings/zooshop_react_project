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

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

return {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  loading, request, error, clearError, refreshToken
};
}
export default useUserService;