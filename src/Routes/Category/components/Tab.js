import React from "react";
import styled from "styled-components";
import ProductCard from "../../../Component/ProductCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 15px;
  padding-left: 100px;
  padding-right: 100px;

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

const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  `;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  cursor: none;
  margin-left: 10px;
  margin-top:130px;
  border-bottom: ${(props) => props.theme.boxBorder};
  `;

export default ({text,data}) => {
  console.log(data)
  return (
    <>
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
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