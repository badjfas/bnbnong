import React from "react";
import styled from "styled-components";

import MarketCard from "./MarketCard";

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-image: url('${(props) => props.src}');
background-size:cover;
background-position:center center;
width:100%;
height:900px;
`;


const Form = styled.form`
display:table;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1,1fr);
  grid-gap:15px;
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
  margin-bottom:0px;
`;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  cursor: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
  border-bottom: ${(props) => props.theme.boxBorder};
  `;

export default ({data}) => {
  return (
    <>
    <Container src={"https://cdn.pixabay.com/photo/2019/05/07/13/28/stone-day-bag-4185981_960_720.jpg"}>
      <Form> 
      <Title>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Title>
        <SubTitle>
        Lorem Ipsum has been the industry's
        </SubTitle>
        <Search placeholder="농장 이름..."/>
      </Form>
    </Container>
      <TextContainer>
        <Text>함께 하는 농장들</Text>
      </TextContainer>
      <GridContainer>
        {data.map((p)=>{
          return (
            <MarketCard
              key={p.id}
              id={p.id}
              src={"https://www.iboxjeju.com/packs/media/images/products/06/img6-1-7c6ff0ac0db4d544e3f3c10e296713b4.jpg"}
              name={p.name}
              family={p.family}
            />
          );
        })}
      </GridContainer>
    </>
  );
};
