import React from "react";
import styled from "styled-components";
import Product from "./components/Product"
import Loader from "../../Component/Loader";
import { NaverMap, Marker } from "react-naver-maps";
import NaverAPIMap from "./components/NaverMaps";

const Container = styled.div`
  padding:100px;
`;


export default ({ data, getList, error, loading,numberWithCommas,props }) => {
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Product data={getList} numberWithCommas={numberWithCommas} />
        </>
      )}
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </Container>
  );
};
