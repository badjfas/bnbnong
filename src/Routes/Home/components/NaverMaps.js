import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

const NaverMapAPI= () => {
  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
      style={{
        width: "200px", // 네이버지도 가로 길이
        height: "200px", // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    />
  )
}

export const NaverAPIMap = (props) => {

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"wvrfdytxl9"} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI/>
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverAPIMap;