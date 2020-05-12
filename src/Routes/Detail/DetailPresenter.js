import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "@material-ui/core";

const Container = styled.div``;

const ProductDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px auto;
  margin-bottom:15px;
  
`;

const ProductImg = styled.img`
  background-position: center;
  background-size: cover;
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
  padding: 15px 20px;
  box-sizing: border-box;
`;

const FamilyName = styled.div``;
const Price = styled.div``;
const Weight = styled.div``;
const Grade = styled.div``;

export default ({ id, data }) => {
  const values = Object.values(data);
  values.map((e) => {
    console.log(e.id, e.name);
  });

  const [count,setCount] = useState(0)


  return (
    <Container>
      {values.map((e) => {
        return (
          <ProductDiv key={e.id}>
            <ProductImg
              src={
                e.file_name
                  ? "http://211.62.225.216:4000/static/" + e.file_name
                  : "318x180.svg"
              }
            />
            <Info>
              <h1>{e.name}</h1>
              <Grade>{e.grade}</Grade>
              <FamilyName>{e.familyName}</FamilyName>
              <Price>{e.price_shipping}원</Price>
              <Weight>{e.weight}</Weight>
              <div style={{alignItems:"center",justifyContent:"center"}}>
              <Button style={{width:12}} onClick={()=>setCount(count+1)} color="primary">
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
          <div style={{marginTop:25,display:"flex"}}>
            <Button variant="contained" color="primary">구매하기</Button>
            <Button style={{marginLeft:25}} variant="contained" color="primary">장바구니</Button>
            </div>
            </Info>

          </ProductDiv>
        );
      })}
     <>
     <DetailInfoImg src="http://skin-skin6.cafe11111111.cafe24.com/web/upload/NNEditor/20200420/b270a93326c2a9671a24a19fa8905a5f.jpg"/>
     <DetailInfoImg src="http://skin-skin6.cafe11111111.cafe24.com/web/upload/NNEditor/20200420/c82d522740faf7ccadc40f56905b99dd.jpg"/>
     <DetailInfoImg src="http://skin-skin6.cafe11111111.cafe24.com/web/upload/NNEditor/20200420/fbefb46cfd39cc9c33bd8d063ddb0baf.jpg"/>
     </>
    </Container>
  );
};
