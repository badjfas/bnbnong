import React from "react";
import styled from "styled-components";

import SquarePost from "../PCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 768px) {
    width: 100%;
    height:100%;
    display: table;
  }
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   overflow:hidden;
//   align-items: center;
//   justify-content: center;
//   box-sizing: border-box;
//   height: 100%;

//   @media only screen and (max-width: 500px) {
//     width: 100%;
//     height: 100%;
//     display: table;
//   }
// `;
const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:30px;
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
        <Text>제주 농산물</Text>
      </TextContainer>

      <GridContainer>
        <SquarePost
          src={
            "https://www.iboxjeju.com/packs/media/images/products/06/img6-1-7c6ff0ac0db4d544e3f3c10e296713b4.jpg"
          }
          name={"히우스 감귤"}
          content={"달콤새콤 조화,부드럽고 순한맛의 귀한 귤"}
        />
        <SquarePost
          src={
            "https://www.iboxjeju.com/packs/media/images/products/01/img1-1-a46ccfc3e22f5e05f6c9b52ffc901527.jpg"
          }
          name={"황금향"}
          content={"터지는 과즙과 향이 일품,과즙의 여왕 제주 황금향"}
        />
        <SquarePost
          src={
            "https://www.iboxjeju.com/packs/media/images/products/02/img2-1-2773a759b4bb6c8f67df368aecc40d48.jpg"
          }
          name={"노지 방수재배 감귤"}
          content={"고당도를 실현한 노지 재배 감귤"}
        />

        <SquarePost
          src={
            "https://www.iboxjeju.com/packs/media/images/products/03/img3-1-602276d8fc25bc11ccfe1e1783b9219c.jpg"
          }
          name={"레드향"}
          content={"과육이 부드럽고 당도가 높아 신맛을 싫어하는 분들도 좋아하는 최고급 귤"}
        />
        <SquarePost
          src={
            "https://www.iboxjeju.com/packs/media/images/products/04/img4-1-42837b1cbd29d89d4ebeee1594098002.jpg"
          }
          name={"천혜향"}
          content={"달콤한 맛과 상큼한 향이 최고의 조화를 이루는 봄 맞이 귤"}
        />
        <SquarePost
          src={
            "https://www.iboxjeju.com/packs/media/images/products/05/img5-1-dee41fa405d4cf1609d746c550e4555e.jpg"
          }
          name={"숙성 한라봉"}
          content={"숙성을 통해 청량하고 깊은 맛을 내는 새로운 과일로 재탄생한 숙성 한라봉"}
        />
      </GridContainer>
    </>
  );
};
