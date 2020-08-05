import React from "react";
import styled from "styled-components";
import Product from "../../Component/Product";
import Loader from "../../Component/Loader";
import Error from "../../Component/Error";

const Container = styled.div`
  padding-top: 150px;
`;

export default ({
  data,
  getList,
  error,
  loading,
  numberWithCommas,
  initMap,
}) => {
  return error === null ? (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Product
            data={getList}
            numberWithCommas={numberWithCommas}
            error={error}
          />
        </>
      )}
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </Container>
  ) : (
    <Error />
  );
};
