import React from "react";
import styled from "styled-components";
import Product from "./components/Product"

const Container = styled.div`
  padding:100px;
`;


export default ({ data}) => {
  return (
    <Container>
      <Product data={data} />
    </Container>
  );
};
