import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Backdrop } from "@material-ui/core";

const Container = styled.div``;

const ProductDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom:15px;
`;

const ProductImg = styled.img`
  background-position: center;
  background-size: contain;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
  border: 1px solid #c3c3c2;
`;
const DetailInfoImg = styled.img`
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
`;
const Info = styled.div`
  width: 100%;
  float: left;
  padding: 10px 5px;
  box-sizing: border-box;
`;

const FamilyName = styled.div``;
const Price = styled.div``;
const Weight = styled.div``;
const Grade = styled.div``;

export default ({ data,loading }) => {
  const [count,setCount] = useState(0)
 
  return (
    <Container>
        {loading===true ? <Backdrop/> : <Container>
          <ProductDiv>
            <ProductImg
              src={
                data.selectProduct.image_1
              }
            />
            <Info>
              <div style={{height:"50%",lineHeight:1.5}}>
              <h1>Test</h1>
              <Grade>Test</Grade>
              <FamilyName>Test</FamilyName>
              <Price>Test원</Price>
              <Weight>Test</Weight>
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Button style={{width:3}} onClick={()=>setCount(count+1)} color="primary">
            +
          </Button>
          <Input style={{width:40}} type="number" value={count} />
          <Button color="primary" onClick={()=>{if(count <= 0){
              setCount(0)
          }else{
              setCount(count-1)
          }}}>
            -
          </Button>
          </div>
          <div style={{marginTop:25,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Button variant="contained" color="primary">구매하기</Button>
            <Button style={{marginLeft:25}} variant="contained" color="primary">장바구니</Button>
            </div>
            </Info>
          </ProductDiv>
     <>
     <DetailInfoImg src="http://skin-skin6.cafe11111111.cafe24.com/web/upload/NNEditor/20200420/b270a93326c2a9671a24a19fa8905a5f.jpg"/>
     <DetailInfoImg src="http://skin-skin6.cafe11111111.cafe24.com/web/upload/NNEditor/20200420/c82d522740faf7ccadc40f56905b99dd.jpg"/>
     <DetailInfoImg src="http://skin-skin6.cafe11111111.cafe24.com/web/upload/NNEditor/20200420/fbefb46cfd39cc9c33bd8d063ddb0baf.jpg"/>
     </> </Container> 
    }
    </Container>
  
  )
};
