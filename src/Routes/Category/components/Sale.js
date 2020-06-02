import React from "react";
import { useQuery } from "react-apollo-hooks";
import { READ_PRODUCT } from "../../../Queries/readProduct";
import styled from "styled-components";
import { Link } from "react-router-dom";
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Container = styled.div`
  width:100%;
  height:100%;
  padding: 20px;
`;


const ImgContainer = styled.div`
background-image: url(${(props) => props.src});
background-size: cover;
display:flex
width: 100%;
height: 320px;
border:1px solid #727272;
&:hover{
  transform: scale(1.03);
    transition: all .3s ease-in-out;
}
`;

const TextContainer = styled.div`
  display: table;
  align-items: center;
  justify-content: center;
`;

const ProductName = styled.span`
  color: #494848;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 22px;
  line-height: 2;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.span`
  color: #d1913c;
  display: block;
  overflow: hidden;
  padding-top: 1px;
  font-weight: 500;
  font-size: 15px;
  font-family:'Do Hyeon', sans-serif;
    line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default ({data}) => {
  return (
    <>
      <div style={{padding:20}}>
        <ProductPrice style={{fontSize:20,color:"black"}}>전체 항목</ProductPrice>
      </div>

      <GridContainer>
      {data.map((p) => {
        if(p.state===3)
        return (
          <Link to="/detail" key={p.id}>
          <Container>
            <ImgContainer src={p.src} />
            <TextContainer>
              <ProductName>천헤향</ProductName>
              <ProductPrice>9,000원</ProductPrice>
            </TextContainer>
          </Container>
        </Link>
        )
      })}
      </GridContainer>
    </>
  );
};
