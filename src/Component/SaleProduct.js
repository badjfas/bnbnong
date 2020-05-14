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
const EList = styled(List)`
  width:33%;
`;
const Text = styled.span`
  color: rgb(0, 0, 0);
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left:10px;
`;

export default () => {
  return (
    <>
    <Container>
            <Text>추천 상품</Text>
      <UL>
        <List>
          <Link>
            <ProductCard />
          </Link>
        </List>
        <List>
          <Link>
            <ProductCard />
          </Link>
        </List>
        <List>
          <Link>
            <ProductCard />
          </Link>
        </List>
        <List>
          <Link>
            <ProductCard />
          </Link>
        </List>
      </UL>
    </Container>

    <Container>
    <Text>추천 상품</Text>
      <UL>
        <EList>
          <Link>
            <ProductCard />
          </Link>
        </EList>
        <EList>
          <Link>
            <ProductCard />
          </Link>
        </EList>
        <EList>
          <Link>
            <ProductCard />
          </Link>
        </EList>
        <EList>
          <Link>
            <ProductCard />
          </Link>
        </EList>
        <EList>
          <Link>
            <ProductCard />
          </Link>
        </EList>
        <EList>
          <Link>
            <ProductCard />
          </Link>
        </EList>
      </UL>
    </Container>
    </>
  );
};
