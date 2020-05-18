import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media only screen and (max-width: 500px) {
    width:100%;
    display:table;
  }
`;
const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:30px;
`;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
`;

export default ({src}) => {
  return (
    <>
    <TextContainer>
      <Text>제주 농산물</Text>
    </TextContainer>
    
    <Container>
      <ProductCard src={"https://www.iboxjeju.com/packs/media/images/products/06/img6-1-7c6ff0ac0db4d544e3f3c10e296713b4.jpg"}/>
      <ProductCard src={"https://www.iboxjeju.com/packs/media/images/products/01/img1-1-a46ccfc3e22f5e05f6c9b52ffc901527.jpg"}/>
      <ProductCard src={"https://www.iboxjeju.com/packs/media/images/products/02/img2-1-2773a759b4bb6c8f67df368aecc40d48.jpg"}/>
    </Container>
    <Container>
      <ProductCard src={"https://www.iboxjeju.com/packs/media/images/products/03/img3-1-602276d8fc25bc11ccfe1e1783b9219c.jpg"}/>
      <ProductCard src={"https://www.iboxjeju.com/packs/media/images/products/04/img4-1-42837b1cbd29d89d4ebeee1594098002.jpg"}/>
      <ProductCard src={"https://www.iboxjeju.com/packs/media/images/products/05/img5-1-dee41fa405d4cf1609d746c550e4555e.jpg"}/>
    </Container>
    </>
  );
};
