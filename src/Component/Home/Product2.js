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
// `;
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 500px) {
    width: 100%;
    height:100%;
    display: table;
  }
`;


const Container = styled.div`
display: flex;
flex-direction: row;
 flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height:500px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height:100%;
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

export default ({src}) => {
  return (
    <>
      <TextContainer>
        <Text>기타 가공품</Text>
      </TextContainer>
      <GridContainer>
        <SquarePost
          src={
            "https://m.organic-story.com/web/product/big/201901/d76c22fc86ea008266e16cc58b1d2b5e.jpg"
          }
        />
        <SquarePost
          src={
            "https://view01.wemep.co.kr/wmp-product/9/354/153573549/pm_yerafjs14p3n.jpg?1552981455"
          }
        />

        <SquarePost src={"http://qkfms3005.diskn.com/ss/nut/gjmg_01.jpg"} />
        <SquarePost
          src={
            "https://www.heroasia.net/jam/sites/asia.jam/files/styles/1200x1200/public/1227_203_BitterOrange_APAC_600x412px.png?itok=mUXW3A71"
          }
        />
      </GridContainer>
    </>
  );
};
