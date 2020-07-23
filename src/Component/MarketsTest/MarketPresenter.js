import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  overflow-y:hidden;
  ::-webkit-scrollbar { 
    display: none; 
} 
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: translate;
  padding:10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const MarketName = styled.div`
  width:300px;
  font-size: 30px;
  font-weight:600;
  color:#000;
  cursor:pointer;
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
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
        {marketList.map(list => { 
          return (
            <Contents>
            <MarketName onClick={handleSlideRight}>{list.name}</MarketName>
          </Contents>
          )
        })}
    
        </>
      )}
    </Container>
  );
};
