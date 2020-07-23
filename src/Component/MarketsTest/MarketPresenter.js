import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  overflow-y:hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ::-webkit-scrollbar { 
    display: none; 
} 
`;

const MarketName = styled.div`
position:static;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: #000;
  padding:10px;
  cursor: pointer;
`;

const ButtonLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 30px;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
`;

const ButtonRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 30px;
  background-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
`;

export default ({
  marketList,
  loading,
  currentItem,
  handleNext,
  handlePrev,
  handleSlideRight
}) => {
  console.log(currentItem);
  return (
    <>
        <ButtonLeft>{"<"}</ButtonLeft>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {marketList.map((list) => {
            return (
            <MarketName >{list.name}</MarketName>
                
            );
          })}
        </Container>
      )}
      <ButtonRight>{">"}</ButtonRight>
    </>
  );
};
