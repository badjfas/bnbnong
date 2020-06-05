import React from "react";
import { useQuery } from "react-apollo-hooks";
import { READ_PRODUCT } from "../../../Queries/readProduct";
import styled from "styled-components";
import { Link } from "react-router-dom";
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 768px) {
    width: 100%;
    height:100%;
    display: table;
    justify-content:center;
    margin: 0 auto;
  }
  @media only screen and  (width:768px) , (width:1024px) ,(width:1366px) {
    display:grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height:100%;

  }
`;

const Container = styled.div`
  width:100%;
  height:100%;
  padding: 20px;
  
`;


const ImgContainer = styled.div`
background-image: url(${(props) => props.src});
background-size: cover;
display:flex;
justify-content:center;
align-items:center;
width: 100%;
height: 330px;
&:hover{
  transform: scale(1.03);
    transition: all .3s ease-in-out;
}
@media only screen and (max-width: 768px) {

}
@media only screen and  (width:1024px) ,(width:1366px) {
  width:100%;
  height:500px;
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
