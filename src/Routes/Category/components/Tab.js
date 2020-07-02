import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductCard from "../../Home/components/ProductCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 15px;
  padding: 100px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: table;
    justify-content: center;
    margin: 0 auto;
  }
  @media only screen and (width: 768px), (width: 1024px), (width: 1366px) {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }
`;


export default ({text,data}) => {
  console.log(data)
  return (
    <>
    <GridContainer>
      {data.map((data) => {
        return (
          <ProductCard
            key={data.id}
            id={data.id}
            src={data.src}
            name={data.productname}
            price={data.price}
            category={data.category}
            content={data.content}
          />
        );
      })}
    </GridContainer>
    </>
  );
}