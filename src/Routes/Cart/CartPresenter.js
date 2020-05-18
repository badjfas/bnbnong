import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "@material-ui/core";

const Container = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:5px;
  border:1px solid #ededed;
`;

const ImgContainer = styled.div`
  width:30%
`;

const CartContainer = styled.div`
  width:50%;
  height:130px;
  white-space:pre-line;
  `;

const QtyContainer= styled.div`
  
`;  
  
const ProductImg = styled.img`
  max-width: 130px;
  max-height: 130px;
`;


const ButtonContainer =styled.div`
display:flex;
justify-content:center;
align-items:center;
position:fixed;
width:100%;
max-width:700px;
top:10;
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
        <QtyContainer>
          <Input style={{width:30}}/>개
        </QtyContainer>
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
            <Button variant="contained" style={{display:"flex",height:"100%"}}>주문하기</Button>
        </ButtonContainer>
      </>
    );
}