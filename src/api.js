import axios from "axios";

const api = axios.create({
  baseURL: "http://bnbnong.com:4000",
  // headers:{
  //   'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  // }
});

export const API = {
  getList: (p) =>
    api.get(`/api/product/list/open/${p}`, {
      method: "GET",
    }),
  getMarketList: (p) =>
    api.get(`/api/auth/list/open/0`, {
      method: "GET",
    }),
  getInfo: (p) =>
    api.get(`/api/auth/info/open/${p}`, {
      method: "GET",
    }),
  getDetail: (p) =>
    api.get(`/api/product/detail/open/${p}`, {
      method: "GET",
    }),
};
