import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  margin-top: 30px;
  background-color: #f2f5fa;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Price = styled.span`
  color: rgb(0, 0, 0);
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Product = styled.span`
  font-size: 14px;
  white-space: pre-line;
  color: rgb(0, 0, 0);
  line-height: 19px;
`;
const UL = styled.ul`
    list-style:none;
    margin:0 auto;
`;
const List = styled.li`
    display:inline-block;
    padding:20px;
    width:50%;
    justify-content:center;
    margin: 0 auto;
`;

const Image = styled.img`
    width:100%;
`;


export default () => {
  return (
    <Container >
        <UL>
            <List>
            <Link style={{ marginLeft: 10 }}>
            <Image
              src="https://img-cf.kurly.com/shop/data/goods/1588125578929l0.jpg"
              alt="상품이미지"
              class="thumb"
            />

            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
            </List>

            <List>
            <Link style={{ marginLeft: 10 }}>
                <Image
              src="https://img-cf.kurly.com/shop/data/goods/1588125578929l0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
            </List>
            <List>
            <Link style={{ marginLeft: 10 }}>
                <Image
              src="https://img-cf.kurly.com/shop/data/goods/1588125578929l0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
            </List>
            <List>
            <Link style={{ marginLeft: 10 }}>
                <Image
              src="https://img-cf.kurly.com/shop/data/goods/1588125578929l0.jpg"
              alt="상품이미지"
              class="thumb"
            />
            <div style={{ width: 150 }}>
              <Product>[회사이름] 배부른 퀴노아 곤약밥 2종</Product>
              <Price>2,600원</Price>
            </div>
          </Link>
            </List>
        </UL>
    </Container>
  );
};
