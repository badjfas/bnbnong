import React from "react";
import styled from "styled-components";
import Product from "./components/Product"

const Container = styled.div`
  padding:100px;
`;


export default ({ data}) => {
  const sell = data.filter(e => e.state === 1)
  return (
    <Container>
      <Product data={sell} />
    </Container>
  );
};
