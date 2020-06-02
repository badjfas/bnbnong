import React from "react";
import { useQuery } from "react-apollo-hooks";
import { READ_PRODUCT } from "../../Queries/readProduct";
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
width: 310px;
height: 410px;
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

export default () => {
  const { data, loading } = useQuery(READ_PRODUCT);
  console.log(loading);
  return (
    <>
      <div style={{padding:20}}>
        <ProductPrice style={{fontSize:20,color:"black"}}>전체 항목</ProductPrice>
      </div>

      <GridContainer>
        {!loading
          ? data &&
            data.readProduct.map((product) => (
              <Link to="/detail">
                <Container>
                  <ImgContainer src={product.image_1} />
                  <TextContainer>
                    <ProductName>천헤향</ProductName>
                    <ProductPrice>9,000원</ProductPrice>
                  </TextContainer>
                </Container>
              </Link>
            ))
          : null}
      </GridContainer>
    </>
  );
};
