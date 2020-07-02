import axios from "axios";

const api = axios.create({
  baseURL: "https://211.62.225.216:4001",
  headers:{
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export const API = {
  getList: () =>
    api.get("/product/list", {
      method: "POST",
    }),
};
