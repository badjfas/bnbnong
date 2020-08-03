import React from "react";
import styled from "styled-components";

import ProductCard from "./ProductCard";

const Container = styled.div`
  display: table;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 25px;

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
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
`;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  cursor: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
  border-bottom:2px solid #0f4c81;

  `;

export default ({ data,numberWithCommas,isMarket }) => {
  return (
    <>
      <Container>
        <TextContainer>
          <Text>{isMarket ? "농장" : "마켓"}</Text>
        </TextContainer>
        <GridContainer>
          {data.map((p) => {
            return (
              <ProductCard
                key={p.id}
                id={p.id}
                src={p.file_name}
                name={p.name}
                family={p.family}
                gap={p.gap}
                price={p.price_shipping}
                numberWithCommas={numberWithCommas}
                isMarket={isMarket}
              />
            );
          })}
        </GridContainer>
      </Container>
    </>
  );
};
