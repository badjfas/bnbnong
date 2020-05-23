import React from "react";
import styled from "styled-components";
import SquarePost from "../PCard";

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
          name={"제주 딸기 잼"}
          content={"이 상품은 딸기로 만든 잼"}
        />
        <SquarePost
          src={
            "https://view01.wemep.co.kr/wmp-product/9/354/153573549/pm_yerafjs14p3n.jpg?1552981455"
          }
          name={"제주 말린 감귤"}
          content={"이 상품은 감귤로 만든 간식"}

        />
        <SquarePost
          src={"http://qkfms3005.diskn.com/ss/nut/gjmg_01.jpg"}
          name={"제주 건 망고"}
          content={"이 상품은 망고로 만든 간식"}

        />
        <SquarePost
          src={
            "https://www.heroasia.net/jam/sites/asia.jam/files/styles/1200x1200/public/1227_203_BitterOrange_APAC_600x412px.png?itok=mUXW3A71"
          }
          name={"제주 한라봉 잼"}
          content={"이 상품은 한라봉으로 만든 잼"}

        />
      </GridContainer>
    </>
  );
};
