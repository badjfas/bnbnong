import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: inline-block;
  &:hover div{
      display:block;
      backgrond-color:#000;

  }
`;

const List = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: div 0.3s ease-in-out;
`;

const Item = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  font-family: 'Noto Sans';
  display: block;
  &:hover{
    display: block;
    background-color: #f1f1f1;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: black;
  font-weight: 600;
  font-size: 15px;
  font-family: 'Noto Sans';
   border: none;
  cursor: pointer;
`;

export const Dropdown = () => {
  return (
    <Container>
      <Button>전체 카테고리</Button>
      <List>
        <Item href="#">Link 1</Item>
        <Item href="#">Link 2</Item>
        <Item href="#">Link 4</Item>
        <Item href="#">Link 5</Item>
        <Item href="#">Link 6</Item>
        <Item href="#">Link 7</Item>
        <Item href="#">Link 8</Item>
      </List>
    </Container>
  );
};
