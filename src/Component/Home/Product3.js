import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LeisureCard from "./LeisureCard";

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
// `;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;  
  float:left;
  padding : 5px;

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

export default ({src}) => {
  return (
    <>
    <TextContainer>
      <Text>체 험</Text>
    </TextContainer>
    <Container>
      <LeisureCard src={"https://img-wishbeen.akamaized.net/plan/1444435450498_10923258_917735108276775_4031536054220078925_n.jpg"}/>
    </Container>
    <Container>
    <LeisureCard src={"https://img.hani.co.kr/imgdb/resize/2018/0917/00500854_20180917.JPG"}/>
    </Container>
    <Container>
    <LeisureCard src={"https://i.011st.com/ex_t/R/1000x1000/1/85/0/src/dl/20/7/6/2/3/5/3/cNnBO/2637762353_131880199.jpg"}/>
    </Container>
    </>
  );
};
