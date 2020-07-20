import axios from "axios";

const api = axios.create({
  baseURL: "http://bnbnong.com:4000",

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
  getMarketInfo: (p) =>
    api.get(`/api/auth/info/open/${p}`, {
      method: "GET",
    }),
  getDetail: (p) =>
    api.get(`/api/product/detail/open/${p}`, {
      method: "GET",
    }),
  getCoord: (address) =>
    api.get(`/api/geocode/?query=${address}`, {
      method: "GET",
    }).then(response => response.data.addresses[0]),
  getFamilyCateogry: () => api.get(`api/product/familyCategory`,{
    method:"GET"
  }),
  getAllFamily : (categoryId) =>api.get(`api/product/allFamily/${categoryId}`,{
    method:"GET"
  }),

};

export const MapAPI = {};
