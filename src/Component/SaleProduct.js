import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Container = styled.div`
  margin: 0;
  margin-top: 30px;
  background-color: #f2f5fa;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const UL = styled.ul`
  list-style: none;
`;
const List = styled.li`
  display: inline-block;
  padding: 5px;
  width: 50%;
  justify-content: center;
  margin: 0px auto;
`;
const EProductCart = styled(ProductCard)`

`;

export default () => {
  return (
    <Container>
      <UL>
        <List>
          <Link>
            <EProductCart />
          </Link>
        </List>
        <List>
          <Link>
            <EProductCart />
          </Link>
        </List>
        <List>
          <Link>
            <EProductCart />
          </Link>
        </List>
        <List>
          <Link>
            <EProductCart />
          </Link>
        </List>
      </UL>
    </Container>
  );
};
