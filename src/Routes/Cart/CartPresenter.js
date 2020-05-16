import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "@material-ui/core";

const Container = styled.div`
  width:100%;
  display:flex;
  padding:10px;
  border:1px solid #ededed;
`;

const ImgContainer = styled.div`
  width:30%
`;

const CartContainer = styled.div`
  width:70%;
  height:150px;
  white-space:pre-line;
`
;
const ProductImg = styled.img`
max-width:150px;
max-height:150px;
`;

const ButtonContainer =styled.div`
display:flex;
width:100%;
position:fixed;
bottom:0;
  align-items:center;
  justify-content:center;
`;

export default ({username})=> {
    const  [isEmpty,setIsEmpty] = useState(false);

    return (
      <>
      <Container>
          <ImgContainer>
                <ProductImg src={"asdasd"}/>
          </ImgContainer>
          <CartContainer>
              <p>Item1</p>
              <p>Item1</p>
              <p>Item1</p>
              <p>Item1</p>
          </CartContainer>
      </Container>
      <Container>
          <ImgContainer>
                <ProductImg src={"asdasd"}/>
          </ImgContainer>
          <CartContainer>
            Item2
          </CartContainer>
      </Container>
      <Container>
          <ImgContainer>
                <ProductImg src={"asdasd"}/>
          </ImgContainer>
          <CartContainer>
            Item3
          </CartContainer>
      </Container>
      <Container>
          <ImgContainer>
                <ProductImg src={"asdasd"}/>
          </ImgContainer>
          <CartContainer>
            Item3
          </CartContainer>
      </Container>
      <ButtonContainer>
            <Button variant="contained" style={{width:"100%",height:"100%"}}>주문하기</Button>
        </ButtonContainer>
      </>
    );
}