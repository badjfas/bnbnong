import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Container = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto;

`;

const Contents = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  transition: 0.2s ease-in-out;
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
  transition: 0.2s;
  transform: translate(${(props) => props.move}px, 0px);
`;

const Item = styled.li`
  display: inline-block;
  padding: 0px 25px;
  vertical-align: top;
  text-align:center;
  line-height:30px;
`;

const Img = styled.div`
height:80px;
width:80px;
border-radius:70%;
border:3px solid #eee;
background-size:cover;
background-position:center center;
background-image: url('${(props) => props.src}');
background-color:#eee;

`;

export default ({
  categoryList,
  loading,
  handleSlideRight,
  move,
  handleSlideLeft,
}) => {
  return (
    <Container>
      <button onClick={() => handleSlideLeft(150)}>{"<"}</button>

      {loading ? (
        <Loader />
      ) : (
        <Contents>
          <Items move={move} id={"ul"}>
            {categoryList.map((list) => {
              return (
                <Item id={list.id}>
                  <Img
                    src={
                      "https://shop-phinf.pstatic.net/20190401_279/shopping_15540760194201mPXC_JPEG/%C5%E4%B8%B6%C5%E4.jpg?type=f100"
                    }
                  />
                  {list.name}
                </Item>
              );
            })}
          </Items>
        </Contents>
      )}
      <button onClick={() => handleSlideRight(-150)}>{">"}</button>
    </Container>
  );
};
