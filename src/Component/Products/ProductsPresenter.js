import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Container = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0px auto;
`;


const Contents = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  transition : 0.2s ease-in-out;
  ::-webkit-scrollbar {
    display: none;
  }

`;

const Items = styled.ul`
  font-size: 15px;
  font-weight: 600;
  list-style: none;
  white-space: nowrap;
  margin: 0 -20px;
  transition : 0.2s;
  transform: translate(${props=>props.move}px,0px);

`;

const Item = styled.li`
display: inline-block;
padding:20px;
`;

export default ({
  categoryList,
  loading,
  handleSlideRight,
  move,
  handleSlideLeft
}) => {
  console.log(move);
  return (
    <Container>
            <button onClick={()=>handleSlideLeft(150)}>{"<"}</button>

      {loading ? (
        <Loader />
      ) : (
        <Contents>
          <Items move={move} id={"ul"}>
            {categoryList.map((list) => {
              return <Item id={list.id}>{list.name}</Item>;
            })}
          </Items>
        </Contents>
      )}
      <button onClick={()=>handleSlideRight(-150)}>{">"}</button>
    </Container>
  );
};
