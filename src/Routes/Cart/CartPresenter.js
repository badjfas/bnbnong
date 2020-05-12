import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "@material-ui/core";

const Container = styled.div`
`;

const CartHeader =styled.div`
    overflow: hidden;
    border-radius:5px;
    position: relative;
    padding: 18px 45px 19px 56px;
    border-top: 1px solid #eee;
    background: #fff;
`;
const CartHeaderText = styled.h4`
    font-weight:bold;
    font-size: 20px;
    text-align: center;
    padding:15px;
    border-bottom:1px solid #000;
    font-family: "Apple SD Gothic Neo","Noto Sans Regular","맑은 고딕","malgun gothic","돋움","dotum",sans-serif;
`;

const EmptyCartItem = styled.p`
    display: block;
    width: calc(100% - 20px);
    height: auto;
    margin: 40px auto 50px auto;
    padding: 60px 0;
    font-size: 15px;
    font-weight: 500;
    font-family: 'Noto Sans KR', 'Lato', sans-serif;
    line-height: 100%;
    color: #666;
    text-align: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    background: #fff;
`;

const CartItems = styled.div`
    color: #333;
    font-family: Open Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
`;

const CartItemContainer = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
`;

const CartItem = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
`;

const ProductImg = styled.img`
  width:70px;
  height:70px;
`;

const Td = styled.td`
  padding:30px;
  justify-content:center;
  align-items:center;
`;

export default ({username})=> {
    const  [isEmpty,setIsEmpty] = useState(false);

    return (
      <Container>
        {isEmpty === false ? (
          <Container className="Container">
            <CartHeader>
              <CartHeaderText>장바구니</CartHeaderText>
            </CartHeader>
            <div>
            <CartItemContainer className="CartItemContainer">
              <CartItem className="CartItem">
                <Td>
                    <ProductImg className="ProductImg"
                      src={
                        "https://avatars2.githubusercontent.com/u/51310757?s=460&v=4"
                      }
                    />
                </Td>
                <Td style={{width:"100%"}}>
                  <p>asdadasdas</p>
                  <p>asdadasdas</p>
                  <p>asdadasdas</p>
                </Td>
                <Td>
                  <Button>삭제</Button>
                </Td>
              </CartItem>
            </CartItemContainer>
            </div>
          </Container>
        ) : (
          <Container>
            <CartHeader>
              <CartHeaderText>장바구니</CartHeaderText>
            </CartHeader>
            <CartItems>
              <EmptyCartItem>장바구니가 비었습니다.</EmptyCartItem>
            </CartItems>
          </Container>
        )}
      </Container>
    );
}