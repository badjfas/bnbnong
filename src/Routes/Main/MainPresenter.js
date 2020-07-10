import React from "react";
import styled from "styled-components";
import Market from "./components/Market"
import Loader from "../../Component/Loader";

const Container = styled.div`
  padding:100px;
`;


export default ({ data, marketList, error, loading, numberWithCommas }) => {
  return (
    <Container>
      {loading ? <Loader/>:<Market data={marketList} numberWithCommas={numberWithCommas} />}
    </Container>
  );
};
