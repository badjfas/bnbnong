import React from "react";
import styled from "styled-components";
import ProductCard from "./../Home/components/ProductCard";

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
  width:33%;
  padding-top:200px;
  float:left;
`;

const Container = styled.div`
width:400px;
`;

const ImgContainer = styled.div`
  display:inline-block;
`;


 const SearchPresenter =  ({ searchTerm, loading, data }) => {
  console.log(data)
  return (
    data &&
    data.map((data) => (
      <Wrapper>
      <Container>
        <ProductCard key={data.id} id={data.id} src={data.src} name={data.productname} price={data.price} category={data.category} content={data.content} />
      </Container>
      </Wrapper>
    )
  )
  )
 }
    
    export default SearchPresenter;
