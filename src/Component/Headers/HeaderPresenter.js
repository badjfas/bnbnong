import React from "react";
import styled from "styled-components";

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

export default ({ handleScroll, scrollTop }) => {
 return(
    <>
    <Header className="Scroll" onScroll={handleScroll} scrollTop={scrollTop}>
      <HeaderTitle>bnbnong</HeaderTitle>
    </Header>
  </>
 );
};