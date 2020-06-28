import axios from "axios";

const api = axios.create({
  baseURL: "http://211.62.225.216:4001/",
});

export const API = {
  getList: () =>
    api.get("product/total", {
      method: "POST",
    }),
};
