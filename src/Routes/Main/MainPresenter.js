import React, { useState } from "react";
import styled from "styled-components";
import Market from "./components/Market";
import Loader from "../../Component/Loader";
import MarketFilter from "./components/MarketFilter";

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background-image: url('${(props) => props.src}');
  background-size:cover;
  background-position:center center;
  width:100%;
  height:900px;
  flex-wrap:wrap;
  `;
const Form = styled.form`
  display: table;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 60px;
  margin-bottom: 50px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 50px;
`;

const Search = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 36px;
  width: 400px;
  background-color: #f7f7f7;
  border: 1px solid #f7f7f6;
  z-index: 1;
  margin: 0px auto;
`;

const Header = styled.div.attrs(props=>({
  className:props.className
}))`
  background-color:${props=>props.scrollTop>100 ? "transparent" : "#2c3e50" };
  padding: 20px 10px; 
  color: black;
  text-align: center;
  font-size:20px;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%; 
  opacity:${props=>props.scrollTop>100 ? 0 : 1 };
  transition: 0.2s;
  z-index:1030;
`;

const HeaderTitle = styled.div``;

export default ({
  getAllFamily,
  marketList,
  error,
  loading,
  numberWithCommas,
  FamilyCategoryList,
  handleScroll,
  scrollTop
}) => {
console.log(marketList)
  return (
    <>
      <Container
        src={
          "https://cdn.pixabay.com/photo/2019/05/07/13/28/stone-day-bag-4185981_960_720.jpg"
        }
      >
        <Header className="Scroll" onScroll={handleScroll} scrollTop={scrollTop}>
          <HeaderTitle>
bnbnong
          </HeaderTitle>
        </Header>
        <Form>
          <Title>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Title>
          <SubTitle>Lorem Ipsum has been the industry's</SubTitle>
          <Search placeholder="농장 이름..." />
        </Form>
        <MarketFilter FamilyCategoryList={FamilyCategoryList} getAllFamily={getAllFamily} loading={loading}/>
      </Container>
      {loading ? (
        <Loader />
      ) : (
        <Market
          data={marketList}
          numberWithCommas={numberWithCommas}
          FamilyCategoryList={FamilyCategoryList}
        />
      )}
    </>
  );
};
