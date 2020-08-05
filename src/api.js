import axios from "axios";
/* global naver */

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
  getProduct: ({
    pageNumbers: page,
    keywordP: name,
    family,
    category,
    stateP: state,
  }) => {
    return api
      .request("/api/product/list/open/", {
        method: "POST",
        data: JSON.stringify({
          page,
          name,
          family,
          category,
          state,
        }),
      })
      .then((response) => {
        if (response.status === 401) {
          return "Not Authorization";
        } else if (response.status === 200) {
          console.log("getProduct is working.. : " , response.data);
          return response.data;
        }
      });
  }
};

export const MapAPI = {
  initMap({x,y,roadAddress,jibunAddress}) {
    var contentString = [
      '<div class="iw_inner" style="padding: 10px;">',
      `<h4>${roadAddress}</h4>`,
      `<div>> ${jibunAddress}</div>`,
      '</div>'
    ].join('');

    let map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(y, x),
      zoom: 18
    });

    let marker = new naver.maps.Marker({
      map: map,
      position: new naver.maps.LatLng(y, x),
    });

    var infowindow = new naver.maps.InfoWindow({
      content: contentString,
      //maxWidth: 140,
      borderColor: "lightgrey",
      borderWidth: 2,
      anchorSize: new naver.maps.Size(20, 20),
      anchorSkew: true,
      pixelOffset: new naver.maps.Point(20, -20),
    });  

    naver.maps.Event.addListener(marker, "click", function (e) {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });
  }


};
