import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProcessedCard from "./ProcessedCard";
import SquarePost from "../PCard";

// const Container = styled(Link)`
//   padding: 15px;
//   width:100%;
//   display: talbe;
//   align-items: center;
//   justify-content: center;
//   box-sizing: border-box;
//   @media only screen and (max-width: 500px) {
//     width:100%;
//     display:table;
//   }
// `;
// const TextContainer = styled.div`
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   padding: 50px;
//   border-top:1px solid #494848;
// `;
// const Text = styled.span`
//   color: #000;
//   display: block;
//   overflow: hidden;
//   padding-top: 3px;
//   font-weight: 600;
//   font-size: 25px;
//   line-height: 2;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   margin-left:10px;
// `;3

const Container = styled.div`
  display: flex;
  flex-direction: row;
   flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media only screen and (max-width: 500px) {
    width: 100%;
    display: table;
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
`;


export default () => {
  return (
    <>
      <TextContainer>
        <Text>체 험</Text>
      </TextContainer>
      <Container>
        <SquarePost
          src={
            "https://img-wishbeen.akamaized.net/plan/1444435450498_10923258_917735108276775_4031536054220078925_n.jpg"
          }
          name={"조랑말 체험"}
        />
        <SquarePost
          src={
            "https://img.hani.co.kr/imgdb/resize/2018/0917/00500854_20180917.JPG"
          }
          name={"수상 레저"}
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
      </Container>
    </>
  );
};
