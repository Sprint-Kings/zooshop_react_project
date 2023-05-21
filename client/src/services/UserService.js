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
  return res.adresses;
}

const getCart = async () => {
  const res = await request(`${API_URL}user/cart`, authHeader());
  return res;
}

const addCart = async (productId, count) => {
  const res = await request(`${API_URL}user/cart/submit`, authHeader(), 'POST', {
    productId: productId,
    count: count
  });
  return res.message;
};

const deleteCart = async (productId) => {
  const res = await request(`${API_URL}user/cart/delete`, authHeader(), 'POST', {
    productId: productId
  });
  return res;
};

const getOrders = async () => {
  const res = await request(`${API_URL}user/orders`, authHeader());
  return res;
}

const getOrder = async (id) => {
  const res = await request(`${API_URL}user/order/${id}`, authHeader());
  return res;
}

const addOrder = async (adress, total) => {
  const res = await request(`${API_URL}user/order/submit`, authHeader(), 'POST', {
    adress: adress,
    total: total
  });
  return res.message;
};

const deleteOrder = async (orderId) => {
  const res = await request(`${API_URL}user/order/delete`, authHeader(), 'POST', {
    orderId: orderId
  });
  return res.message;
};


const addAdress1 = (adress) => {
  return axios
    .post(API_URL + "user/adress/submit", {
      adress: adress.adress
    }, {headers: authHeader()})
    .then((response) => {
      return response.data;
    });
};

const addAdress = async (adress) => {
    await request(`${API_URL}user/adress/submit`, authHeader(), 'POST', {
      adress: adress.adress
    });
};

const deleteAdress1 = (adress) => {
  return axios
    .post(API_URL + "user/adress/delete", {
      adress: adress
    }, {headers: authHeader()})
    .then((response) => {
      return response.data;
    });
};

const deleteAdress = async (adress) => {
    await request(`${API_URL}user/adress/delete`, authHeader(), 'POST', {
      adress: adress
    });
};

const getUsers = async () => {
  const res = await request(`${API_URL}admin/users`, authHeader());
  return res.users;
}

const addUser1 = (user) => {
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

const addUser = async (user) => {
    const res = await request(`${API_URL}admin/users/submit`, authHeader(), 'POST', {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password: user.password,
      roles: user.roles ? user.roles : null
    });
    console.log(res)
    return res;
};

const deleteUser1 = (id) => {
  return axios
    .post(API_URL + "admin/users/delete", {
      userId: id
    }, {headers: authHeader()})
    .then((response) => {
      return response.data;
    });
};

const deleteUser = async (id) => {
    await request(`${API_URL}admin/users/delete`, authHeader(), 'POST', {
      userId: id
    });
};

const refreshToken1 = () => {
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

const refreshToken = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await request(`${API_URL}auth/refreshtoken`, authHeader(), 'POST', {
    refreshToken: user.refreshToken
  });
  localStorage.setItem("user", JSON.stringify(res));
  return res.data;
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
  getUsers, addUser, deleteUser,
  getCart, addCart, deleteCart, addOrder, getOrders, deleteOrder, getOrder
};
}
export default useUserService;