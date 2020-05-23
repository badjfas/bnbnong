import React from "react";
import styled from "styled-components";
import SquarePost from "../PCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
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


export default () => {
  return (
    <>
      <TextContainer>
        <Text>체 험</Text>
      </TextContainer>
      <GridContainer>
        <SquarePost
          src={
            "https://img-wishbeen.akamaized.net/plan/1444435450498_10923258_917735108276775_4031536054220078925_n.jpg"
          }
          name={"조랑말 체험"}
          content={"asdasdasdasdaskndkasljdasdklajdklsjkljkl"}
        />
        <SquarePost
          src={
            "https://img.hani.co.kr/imgdb/resize/2018/0917/00500854_20180917.JPG"
          }
          name={"수상 레저"}
          content={"asdasdasdasdasdssssssssssssssssssssssssssssssssssasdasasdasda"}

        />
        <SquarePost
          src={
            "https://i.011st.com/ex_t/R/1000x1000/1/85/0/src/dl/20/7/6/2/3/5/3/cNnBO/2637762353_131880199.jpg"
          }
          name={"감귤 농가 체험"}
        />
        <SquarePost
          src={
            "https://post-phinf.pstatic.net/MjAxNzA4MDdfMTY0/MDAxNTAyMDczMjI5MTkz.X240UJe5DKWuCmJVHyzAYT64LctZ6pJxIGsWHmv9600g.lJIPOG_h3b0GDU586XcZeMrPGkx3fhClGoV0WXUWl20g.JPEG/1_copy.jpg?type=w1200"
          }
          name={"낙타 트래킹"}
        />
      </GridContainer>
    </>
  );
};
