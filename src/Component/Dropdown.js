import React from "react"
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: inline-block;
  &:hover > div {
    display: block;

  }
`;

const DropContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;    
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index : 1 ;
  transform: translateY (-20px);
  transition: 0.2s ease-in-out;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover + div{
      display:block;
  }
`;

const A = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
`;

export default () => {

    return (
      <Container>
        <Button class="dropbtn">Dropdown</Button>
        <DropContent>
          <A href="#">Link 1</A>
          <A href="#">Link 2</A>
          <A href="#">Link 3</A>
        </DropContent>
      </Container>
    );
}