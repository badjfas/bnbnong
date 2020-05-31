import React from "react";
import styled from "styled-components";
import SquarePost from "./PCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
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
  }
`;

const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:30px;
  border-top:1px solid #000;

`;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
  border-bottom:2px solid #000;

`;

export default ({data}) => {
  return (
    <>
      <TextContainer>
        <Text>기타 가공품</Text>
      </TextContainer>
      <GridContainer>
        {data.map((p) => {
        
          if(p.id>6&&p.id<11) return (
            <SquarePost id={p.id} src={p.src} name={p.productname} category={p.category} content={p.content} />
          );
        })}
      </GridContainer>
    </>
  );
};
